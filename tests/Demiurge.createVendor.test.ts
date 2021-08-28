import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {
    AccountType,
    B,
    getPayload,
    getRandomKeyPair,
    x0,
    ZERO_KEY_PAIR,
    ZERO_UINT256
} from 'jton'
import {Demiurge, DemiurgeContract} from '../src/Demiurge'
import {CustomerContract} from '../src/Customer'
import {Vendor, VendorContract} from '../src/Vendor'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        demiurge: config.contracts.demiurge.requiredForDeployment * B,
        safeMultisigWallet: B
    },
    safeMultisigWallet: {
        createVendor: {
            value: 0.5 * B,
            deployValue: 0.4 * B,
            balanceAfterDeployment: config.contracts.vendor.requiredForDeployment * B
        }
    }
}

it('createVendor', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, demiurgeKeys, {
        _vendorCode: VendorContract.code,
        _customerCode: CustomerContract.code
    })
    await giver.sendTransaction({
        dest: await demiurge.address(),
        value: values.giver.demiurge
    })
    await demiurge.deploy()

    const safeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, safeMultisigWalletKeys)
    await giver.sendTransaction({
        dest: await safeMultisigWallet.address(),
        value: values.giver.safeMultisigWallet
    })
    await safeMultisigWallet.deploy({
        owners: [x0(safeMultisigWalletKeys.public)],
        reqConfirms: 1
    })
    await safeMultisigWallet.sendTransaction({
        dest: await demiurge.address(),
        value: values.safeMultisigWallet.createVendor.value,
        bounce: true,
        flags: 1,
        payload: await getPayload(
            client,
            DemiurgeContract.abi,
            Demiurge.EXTERNAL.createVendor,
            {
                publicKey: ZERO_UINT256,
                owner: await safeMultisigWallet.address(),
                deployValue: values.safeMultisigWallet.createVendor.deployValue,
                balanceAfterDeployment: values.safeMultisigWallet.createVendor.balanceAfterDeployment,
                gasReceiver: await safeMultisigWallet.address()
            }
        )
    })
    const vendor: Vendor = new Vendor(client, ZERO_KEY_PAIR, {
        _demiurge: await demiurge.address(),
        _owner: await safeMultisigWallet.address()
    })
    await vendor.waitForTransaction()
    expect(await vendor.accountType()).toBe(AccountType.active)
    expect(true).toBe(true)
    client.close()
}, testTimeout)