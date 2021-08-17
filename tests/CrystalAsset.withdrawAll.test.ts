import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getNetConfig, getPayload, getRandomKeyPair, NetConfig, x0, ZERO_ANSWER_ID_V2, ZERO_KEY_PAIR} from 'jton'
import {CrystalAssetRoot, CrystalAssetRootContract} from '../src/CrystalAssetRoot'
import {CrystalAsset, CrystalAssetContract} from '../src/CrystalAsset'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const netConfig: NetConfig = getNetConfig(config)

it('withdrawAll', async () => {
    const crystalAssetRootKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAssetRoot: CrystalAssetRoot = new CrystalAssetRoot(client, crystalAssetRootKeys, {
            _code: CrystalAssetContract.code
        }
    )
    await giver.sendTransaction({
        dest: await crystalAssetRoot.address(),
        value: config.contracts.crystalAssetRoot.requiredForDeployment * B
    })
    await crystalAssetRoot.deploy()
    const safeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, safeMultisigWalletKeys)
    await giver.sendTransaction({
        dest: await safeMultisigWallet.address(),
        value: B
    })
    await safeMultisigWallet.deploy({
        owners: [x0(safeMultisigWalletKeys.public)],
        reqConfirms: 1
    })
    const crystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
        _root: await crystalAssetRoot.address(),
        _owner: await safeMultisigWallet.address()
    })
    await safeMultisigWallet.sendTransaction({
        dest: await crystalAssetRoot.address(),
        value: 0.5 * B,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            CrystalAssetRootContract.abi,
            'create',
            {
                ...ZERO_ANSWER_ID_V2,
                owner: await safeMultisigWallet.address(),
                deployValue: 0.3 * B,
                gasReceiver: await safeMultisigWallet.address()
            }
        )
    })
    await crystalAsset.waitForTransaction()
    await safeMultisigWallet.sendTransaction({
        dest: await crystalAsset.address(),
        value: 0.1 * B,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            CrystalAssetContract.abi,
            'withdrawAll',
            {
                to: "0:0000000000000000000000000000000000000000000000000000000000000001",
                bounce: false,
                gasReceiver: await safeMultisigWallet.address()
            }
        )
    })
    await crystalAsset.waitForTransaction()
    const balance: number = parseInt(await crystalAsset.balance())
    expect(balance <= netConfig.transactions.tolerance).toBeTruthy()
    client.close()
}, testTimeout)