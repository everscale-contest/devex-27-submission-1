import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {
    AccountType,
    B,
    getPayload,
    getRandomKeyPair,
    stringToHex,
    x0,
    ZERO_ANSWER_ID_V2,
    ZERO_KEY_PAIR,
    ZERO_UINT256
} from 'jton'
import {BroxusTip3AssetRoot, BroxusTip3AssetRootContract} from '../src/contracts/assets/BroxusTip3AssetRoot'
import {BroxusTip3Asset, BroxusTip3AssetContract} from '../src/contracts/assets/BroxusTip3Asset'
import {RootTokenContract, RootTokenContractContract} from 'jton-contracts/dist/broxus/fungibleToken/RootTokenContract'
import {TONTokenWallet, TONTokenWalletContract} from 'jton-contracts/dist/broxus/fungibleToken/TONTokenWallet'
import {RootTokenContractOwner} from './_src/RootTokenContractOwner'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'
import {BroxusTip3AssetOwner} from './_src/BroxusTip3AssetOwner'
import {PayloadGenerator, PayloadGeneratorContract} from './_src/PayloadGenerator'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        rootTokenContractOwner: config.contracts.rootTokenContractOwner.requiredForDeployment * B,
        rootTokenContract: config.contracts.rootTokenContract.requiredForDeployment * B,
        broxusTip3AssetRoot: config.contracts.broxusTip3AssetRoot.requiredForDeployment * B,
        safeMultisigWallet: 2 * B,
        broxusTip3AssetOwner: B
    },
    broxusTip3AssetRoot: {
        create: {
            value: 0.8 * B,
            deployValue: 0.7 * B,
            balanceAfterDeployment: 0.2 * B,
            deployEmptyWalletGrams: 0.1 * B
        }
    },
    vendor: {
        setReceiveCallback: {
            value: 0.1 * B
        }
    },
    rootTokenContractOwner: {
        mint: {
            value: 0.2 * B
        }
    },
    customerBroxusTip3Asset: {
        transfer: {
            value: 0.5 * B
        }
    }
}
const tokens: number = 100
const payloadTokens: number = 100

it('create', async () => {
    // RootTokenContractOwner + RootTokenContract
    const rootTokenContractKeys: KeyPair = await getRandomKeyPair(client)
    const rootTokenContract: RootTokenContract = new RootTokenContract(client, rootTokenContractKeys, {
        _randomNonce: 0,
        name: stringToHex('TEST'),
        symbol: stringToHex('TEST'),
        decimals: 8,
        wallet_code: TONTokenWalletContract.code
    })
    const rootTokenContractOwnerKeys: KeyPair = await getRandomKeyPair(client)
    const rootTokenContractOwner: RootTokenContractOwner = new RootTokenContractOwner(
        client,
        rootTokenContractOwnerKeys
    )
    await giver.sendTransaction({
        dest: await rootTokenContractOwner.address(),
        value: values.giver.rootTokenContractOwner
    })
    await rootTokenContractOwner.deploy({
        root: await rootTokenContract.address()
    })
    await giver.sendTransaction({
        dest: await rootTokenContract.address(),
        value: values.giver.rootTokenContract
    })
    await rootTokenContract.deploy({
        root_public_key_: ZERO_UINT256,
        root_owner_address_: await rootTokenContractOwner.address()
    })


    // BroxusTip3AssetRoot
    const broxusTip3AssetRootKeys: KeyPair = await getRandomKeyPair(client)
    const broxusTip3AssetRoot: BroxusTip3AssetRoot = new BroxusTip3AssetRoot(client, broxusTip3AssetRootKeys, {
        _code: BroxusTip3AssetContract.code,
    })
    await giver.sendTransaction({
        dest: await broxusTip3AssetRoot.address(),
        value: values.giver.broxusTip3AssetRoot
    })
    await broxusTip3AssetRoot.deploy()


    // SafeMultisigWallet (Customer)
    const customerKeys: KeyPair = await getRandomKeyPair(client)
    const customer: SafeMultisigWallet = new SafeMultisigWallet(client, customerKeys)
    await giver.sendTransaction({
        dest: await customer.address(),
        value: values.giver.safeMultisigWallet
    })
    await customer.deploy({
        owners: [x0(customerKeys.public)],
        reqConfirms: 1
    })


    // Customer Asset
    const customerBroxusTip3Asset: BroxusTip3Asset = new BroxusTip3Asset(client, ZERO_KEY_PAIR, {
        _root: await broxusTip3AssetRoot.address(),
        _owner: await customer.address(),
        _tip3Root: await rootTokenContract.address()
    })
    const customerTONTokenWallet: TONTokenWallet = new TONTokenWallet(client, ZERO_KEY_PAIR, {
        root_address: await rootTokenContract.address(),
        code: TONTokenWalletContract.code,
        wallet_public_key: ZERO_UINT256,
        owner_address: await customerBroxusTip3Asset.address()
    })
    await customer.sendTransaction({
        dest: await broxusTip3AssetRoot.address(),
        value: values.broxusTip3AssetRoot.create.value,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            BroxusTip3AssetRootContract.abi,
            BroxusTip3AssetRoot.EXTERNAL.create,
            {
                ...ZERO_ANSWER_ID_V2,
                tip3Root: await rootTokenContract.address(),
                deployValue: values.broxusTip3AssetRoot.create.deployValue,
                balanceAfterDeployment: values.broxusTip3AssetRoot.create.balanceAfterDeployment,
                walletAddress: await customerTONTokenWallet.address(),
                deployEmptyWalletGrams: values.broxusTip3AssetRoot.create.deployEmptyWalletGrams,
                gasReceiver: await broxusTip3AssetRoot.address()
            }
        )
    })
    await customerTONTokenWallet.waitForTransaction()
    expect(await customerTONTokenWallet.accountType()).toBe(AccountType.active)


    // BroxusTip3AssetOwner (Vendor)
    const vendorKeys: KeyPair = await getRandomKeyPair(client)
    const vendor: BroxusTip3AssetOwner = new BroxusTip3AssetOwner(client, vendorKeys)
    await giver.sendTransaction({
        dest: await vendor.address(),
        value: values.giver.broxusTip3AssetOwner
    })
    await vendor.deploy()


    // Vendor asset
    const vendorBroxusTip3Asset: BroxusTip3Asset = new BroxusTip3Asset(client, ZERO_KEY_PAIR, {
        _root: await broxusTip3AssetRoot.address(),
        _owner: await vendor.address(),
        _tip3Root: await rootTokenContract.address()
    })
    const vendorTONTokenWallet: TONTokenWallet = new TONTokenWallet(client, ZERO_KEY_PAIR, {
        root_address: await rootTokenContract.address(),
        code: TONTokenWalletContract.code,
        wallet_public_key: ZERO_UINT256,
        owner_address: await vendorBroxusTip3Asset.address()
    })
    await vendor.create({
        root: await broxusTip3AssetRoot.address(),
        value: values.broxusTip3AssetRoot.create.value,
        tip3Root: await rootTokenContract.address(),
        deployValue: values.broxusTip3AssetRoot.create.deployValue,
        balanceAfterDeployment: values.broxusTip3AssetRoot.create.balanceAfterDeployment,
        walletAddress: await vendorTONTokenWallet.address(),
        deployEmptyWalletGrams: values.broxusTip3AssetRoot.create.deployEmptyWalletGrams,
        gasReceiver: await vendor.address()
    })
    await vendorTONTokenWallet.waitForTransaction()
    await vendor.waitForTransaction()
    expect(await vendorTONTokenWallet.accountType()).toBe(AccountType.active)


    // Set receive callback
    await vendor.setReceiveCallback({
        value: values.vendor.setReceiveCallback.value,
        gasReceiver: await vendor.address()
    })
    await vendorTONTokenWallet.waitForTransaction()


    // Mint
    await customer.sendTransaction({
        dest: await rootTokenContractOwner.address(),
        value: values.rootTokenContractOwner.mint.value,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            RootTokenContractContract.abi,
            RootTokenContractOwner.EXTERNAL.mint,
            {
                tokens: tokens,
                to: await customerTONTokenWallet.address()
            }
        )
    })

    await customerTONTokenWallet.waitForTransaction()
    expect((await customerTONTokenWallet.getDetails()).balance).toBe(tokens.toString())


    // Transfer
    const offerPayload: string = await getPayload(
        client,
        PayloadGeneratorContract.abi,
        PayloadGenerator.EXTERNAL.offer,
        {
            assetBits: 267 + 128, // address + uint128
            assetAddress: await vendorBroxusTip3Asset.address(),
            assetValue: payloadTokens,
            months: 1,
            withDiscount: 900, // 0.9 = 90%
            accepter: await vendor.address(),
            gasReceiver: await vendor.address()
        }
    )
    const servicePayload: string = await getPayload(
        client,
        PayloadGeneratorContract.abi,
        PayloadGenerator.EXTERNAL.toOffer,
        {
            offer: await vendor.address(),
            payload: offerPayload,
            gasReceiver: await vendor.address()
        }
    )
    const vendorPayload: string = await getPayload(
        client,
        PayloadGeneratorContract.abi,
        PayloadGenerator.EXTERNAL.toService,
        {
            service: await vendor.address(),
            payload: servicePayload,
            gasReceiver: await vendor.address()
        }
    )
    await customer.sendTransaction({
        dest: await customerBroxusTip3Asset.address(),
        value: values.customerBroxusTip3Asset.transfer.value,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            BroxusTip3AssetContract.abi,
            BroxusTip3Asset.EXTERNAL.transfer,
            {
                to: await vendorTONTokenWallet.address(),
                tokens: tokens,
                gasReceiver: await customer.address(),
                payload: vendorPayload
            }
        )
    })
    await vendor.waitForTransaction()
    expect((await vendorTONTokenWallet.getDetails()).balance).toBe(tokens)
    client.close()
}, testTimeout)