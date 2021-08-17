import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {CrystalAssetRoot, CrystalAssetRootContract} from '../src/CrystalAssetRoot'
import {CrystalAsset, CrystalAssetContract} from '../src/CrystalAsset'
import {B, getPayload, getRandomKeyPair, x0, ZERO_ADDRESS, ZERO_ANSWER_ID_V2, ZERO_KEY_PAIR} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'
import {CrystalAssetOwner, GetInfoOut} from './_src/CrystalAssetOwner'
import {PayloadGeneratorContract} from './_src/PayloadGenerator'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('transfer.notEnoughtBalance', async () => {
    const deployValue: number = 0.3 * B
    const transferValue: number = 0.4 * B

    // CrystalAssetRoot
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


    // SafeMultisigWallet (Customer)
    const safeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, safeMultisigWalletKeys)
    await giver.sendTransaction({
        dest: await safeMultisigWallet.address(),
        value: 2 * B
    })
    await safeMultisigWallet.deploy({
        owners: [x0(safeMultisigWalletKeys.public)],
        reqConfirms: 1
    })


    // Customer Asset
    const customerCrystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
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
                deployValue: deployValue,
                gasReceiver: await safeMultisigWallet.address()
            }
        )
    })
    await customerCrystalAsset.waitForTransaction()


    // CrystalAssetOwner (Vendor)
    const crystalAssetOwnerKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAssetOwner: CrystalAssetOwner = new CrystalAssetOwner(client, crystalAssetOwnerKeys)
    await giver.sendTransaction({
        dest: await crystalAssetOwner.address(),
        value: 0.8 * B
    })
    await crystalAssetOwner.deploy()


    // Vendor Asset
    const vendorCrystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
        _root: await crystalAssetRoot.address(),
        _owner: await crystalAssetOwner.address()
    })
    await crystalAssetOwner.create({
        value: 0.5 * B,
        root: await crystalAssetRoot.address(),
        deployValue: 0.2 * B,
        gasReceiver: await crystalAssetOwner.address()
    })
    await vendorCrystalAsset.waitForTransaction()
    await crystalAssetOwner.waitForTransaction()

    // Transfer
    const offerPayload: string = await getPayload(
        client,
        PayloadGeneratorContract.abi,
        'offer',
        {
            assetBits: 256 + 128,
            assetAddress: await vendorCrystalAsset.address(),
            assetValue: transferValue,
            months: 1,
            discount: 100,
            accepter: await safeMultisigWallet.address(),
            gasReceiver: await safeMultisigWallet.address()
        }
    )
    const servicePayload: string = await getPayload(
        client,
        PayloadGeneratorContract.abi,
        'toOffer',
        {
            offer: await safeMultisigWallet.address(),
            payload: offerPayload,
            gasReceiver: await safeMultisigWallet.address()
        }
    )
    const vendorPayload: string = await getPayload(
        client,
        PayloadGeneratorContract.abi,
        'toService',
        {
            service: await safeMultisigWallet.address(),
            payload: servicePayload,
            gasReceiver: await safeMultisigWallet.address()
        }
    )
    await safeMultisigWallet.sendTransaction({
        dest: await customerCrystalAsset.address(),
        value: 0.5 * B,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            CrystalAssetContract.abi,
            'transfer',
            {
                to: await vendorCrystalAsset.address(),
                value: transferValue,
                gasReceiver: await safeMultisigWallet.address(),
                payload: vendorPayload
            }
        )
    })

    await safeMultisigWallet.waitForTransaction()
    const getInfoOut: GetInfoOut = await crystalAssetOwner.getInfo()
    expect(getInfoOut.service).toBe(ZERO_ADDRESS)
    client.close()
}, testTimeout)