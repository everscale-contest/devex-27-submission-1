import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, ZERO_KEY_PAIR, ZERO_UINT256} from 'jton'
import {Demiurge} from '../src/Demiurge'
import {CustomerContract} from '../src/Customer'
import {Vendor, VendorContract} from '../src/Vendor'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('getVendorAddress.owner', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, demiurgeKeys, {
        _vendorCode: VendorContract.code,
        _customerCode: CustomerContract.code
    })
    const safeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, safeMultisigWalletKeys)
    await giver.sendTransaction({
        dest: await demiurge.address(),
        value: config.contracts.demiurge.requiredForDeployment * B
    })
    await demiurge.deploy()
    const vendorAddress: string = await demiurge.getVendorAddress({
        publicKey: ZERO_UINT256,
        owner: await safeMultisigWallet.address()
    })
    const vendor: Vendor = new Vendor(client, ZERO_KEY_PAIR, {
        _demiurge: await demiurge.address(),
        _owner: await safeMultisigWallet.address()
    })
    expect(await vendor.address()).toBe(vendorAddress)
    client.close()
}, testTimeout)