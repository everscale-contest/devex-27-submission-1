import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {CrystalAssetRoot, CrystalAssetRootContract} from '../src/CrystalAssetRoot'
import {CrystalAsset, CrystalAssetContract} from '../src/CrystalAsset'
import {B, getPayload, getRandomKeyPair, x0, ZERO_ANSWER_ID_V2, ZERO_KEY_PAIR} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'
import {CrystalAssetOwner, GetInfoOut} from './_src/CrystalAssetOwner'
import {PayloadGenerator, PayloadGeneratorContract} from './_src/PayloadGenerator'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        crystalAssetRoot: config.contracts.crystalAssetRoot.requiredForDeployment * B,
        safeMultisigWallet: 2 * B,
        crystalAssetOwner: 0.8 * B
    },
    safeMultisigWallet: {
        create: {
            value: 0.5 * B,
            deploymentValue: 0.2 * B,
            balanceAfterDeployment: 0.1 * B
        },
        transfer: {
            value: 0.5 * B
        }
    },
    crystalAssetOwner: {
        create: {
            value: 0.5 * B,
            deploymentValue: 0.2 * B,
            balanceAfterDeployment: 0.1 * B
        }
    },
    offerPayload: {
        offer: 0.009 * B
    }
}
const transferValue: number = 0.009 * B
const payloadTransferValue: number = 0.009 * B

it('transfer.notEnoughBalance', async () => {
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

    // SafeMultisigWallet (Customer)
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


    // Customer Asset
    const customerCrystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
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
    await customerCrystalAsset.waitForTransaction()


    // CrystalAssetOwner (Vendor)
    const crystalAssetOwnerKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAssetOwner: CrystalAssetOwner = new CrystalAssetOwner(client, crystalAssetOwnerKeys)
    await giver.sendTransaction({
        dest: await crystalAssetOwner.address(),
        value: values.giver.crystalAssetOwner
    })
    await crystalAssetOwner.deploy()


    // Vendor Asset
    const vendorCrystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
        _root: await crystalAssetRoot.address(),
        _owner: await crystalAssetOwner.address()
    })
    await crystalAssetOwner.create({
        value: values.crystalAssetOwner.create.value,
        root: await crystalAssetRoot.address(),
        deploymentValue: values.crystalAssetOwner.create.deploymentValue,
        balanceAfterDeployment: values.crystalAssetOwner.create.balanceAfterDeployment,
        gasReceiver: await crystalAssetOwner.address()
    })
    await vendorCrystalAsset.waitForTransaction()
    await crystalAssetOwner.waitForTransaction()

    // Transfer
    const offerPayload: string = await getPayload(
        client,
        PayloadGeneratorContract.abi,
        PayloadGenerator.EXTERNAL.offer,
        {
            assetBits: 267 + 128, // address + uint128
            assetAddress: await vendorCrystalAsset.address(),
            assetValue: payloadTransferValue,
            months: 1,
            withDiscount: 900, // 0.9 = 90%
            accepter: await safeMultisigWallet.address(),
            gasReceiver: await safeMultisigWallet.address()
        }
    )
    const servicePayload: string = await getPayload(
        client,
        PayloadGeneratorContract.abi,
        PayloadGenerator.EXTERNAL.toOffer,
        {
            offer: await safeMultisigWallet.address(),
            payload: offerPayload,
            gasReceiver: await safeMultisigWallet.address()
        }
    )
    const vendorPayload: string = await getPayload(
        client,
        PayloadGeneratorContract.abi,
        PayloadGenerator.EXTERNAL.toService,
        {
            service: await safeMultisigWallet.address(),
            payload: servicePayload,
            gasReceiver: await safeMultisigWallet.address()
        }
    )
    await safeMultisigWallet.sendTransaction({
        dest: await customerCrystalAsset.address(),
        value: values.safeMultisigWallet.transfer.value,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            CrystalAssetContract.abi,
            CrystalAsset.EXTERNAL.transfer,
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
    expect(getInfoOut.service).toBe(await safeMultisigWallet.address())
    expect(getInfoOut.payload).toBe(servicePayload)
    client.close()
}, testTimeout)