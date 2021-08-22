import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {
    B,
    getNetConfig,
    getPayload,
    getRandomKeyPair,
    NetConfig,
    x0,
    ZERO_ADDRESS,
    ZERO_ANSWER_ID_V2,
    ZERO_KEY_PAIR
} from 'jton'
import {CrystalAssetRoot, CrystalAssetRootContract} from '../src/CrystalAssetRoot'
import {CrystalAsset, CrystalAssetContract} from '../src/CrystalAsset'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const netConfig: NetConfig = getNetConfig(config)
const values = {
    giver: {
        crystalAssetRoot: config.contracts.crystalAssetRoot.requiredForDeployment * B,
        safeMultisigWallet: B
    },
    safeMultisigWallet: {
        create: {
            value: 0.5 * B,
            deploymentValue: 0.2 * B,
            balanceAfterDeployment: 0.1 * B
        },
        withdraw: {
            value: 0.5 * B
        }
    }
}
const withdrawValue: number = 0.009 * B

it('withdraw', async () => {
    // CrystalAssetRoot
    const crystalAssetRootKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAssetRoot: CrystalAssetRoot = new CrystalAssetRoot(client, crystalAssetRootKeys, {
            _code: CrystalAssetContract.code
        }
    )
    await giver.sendTransaction({
        dest: await crystalAssetRoot.address(),
        value: values.giver.crystalAssetRoot
    })
    await crystalAssetRoot.deploy()

    // SafeMultisigWallet
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

    // CrystalAsset
    const crystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
        _root: await crystalAssetRoot.address(),
        _owner: await safeMultisigWallet.address()
    })
    await safeMultisigWallet.sendTransaction({
        dest: await crystalAssetRoot.address(),
        value: values.safeMultisigWallet.create.value,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            CrystalAssetRootContract.abi,
            CrystalAssetRoot.EXTERNAL.create,
            {
                ...ZERO_ANSWER_ID_V2,
                owner: await safeMultisigWallet.address(),
                deploymentValue: values.safeMultisigWallet.create.deploymentValue,
                balanceAfterDeployment: values.safeMultisigWallet.create.balanceAfterDeployment,
                gasReceiver: await safeMultisigWallet.address()
            }
        )
    })
    await crystalAsset.waitForTransaction()
    const balance: number = parseInt(await crystalAsset.balance())
    await safeMultisigWallet.sendTransaction({
        dest: await crystalAsset.address(),
        value: values.safeMultisigWallet.withdraw.value,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            CrystalAssetContract.abi,
            CrystalAsset.EXTERNAL.withdraw,
            {
                to: ZERO_ADDRESS,
                value: withdrawValue,
                bounce: false,
                gasReceiver: await safeMultisigWallet.address()
            }
        )
    })
    await crystalAsset.waitForTransaction()
    await safeMultisigWallet.waitForTransaction()
    const balanceAfterWithdraw: number = parseInt(await crystalAsset.balance())
    const balanceDiff: number = balance - balanceAfterWithdraw - withdrawValue
    expect(Math.abs(balanceDiff) <= netConfig.transactions.tolerance * B).toBeTruthy()
    client.close()
}, testTimeout)