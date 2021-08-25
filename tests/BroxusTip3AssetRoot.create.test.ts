import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair, stringToHex, ZERO_ADDRESS, ZERO_KEY_PAIR, ZERO_UINT256} from 'jton'
import {BroxusTip3AssetRoot} from '../src/BroxusTip3AssetRoot'
import {BroxusTip3Asset, BroxusTip3AssetContract} from '../src/BroxusTip3Asset'
import {RootTokenContract} from 'jton-contracts/dist/broxus/fungibleToken/RootTokenContract'
import {TONTokenWallet, TONTokenWalletContract} from 'jton-contracts/dist/broxus/fungibleToken/TONTokenWallet'
import {RootTokenContractOwner} from './_src/RootTokenContractOwner'
import {BroxusTip3AssetOwner, GetInfoOut} from './_src/BroxusTip3AssetOwner'
import {GetDetailsOut} from 'jton-contracts/src/broxus/fungibleToken/TONTokenWallet'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        rootTokenContractOwner: config.contracts.rootTokenContractOwner.requiredForDeployment * B,
        rootTokenContract: config.contracts.rootTokenContract.requiredForDeployment * B,
        broxusTip3AssetRoot: config.contracts.broxusTip3AssetRoot.requiredForDeployment * B,
        broxusTip3AssetOwner: B
    },
    broxusTip3AssetOwner: {
        create: {
            value: 0.8 * B,
            deployValue: 0.7 * B,
            balanceAfterDeployment: 0.2 * B,
            deployEmptyWalletGrams: 0.1 * B
        },
        setReceiveCallback: {
            value: 0.1 * B,
        }
    }
}

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


    // BroxusTip3AssetOwner
    const broxusTip3AssetOwnerKeys: KeyPair = await getRandomKeyPair(client)
    const broxusTip3AssetOwner: BroxusTip3AssetOwner = new BroxusTip3AssetOwner(client, broxusTip3AssetOwnerKeys)
    await giver.sendTransaction({
        dest: await broxusTip3AssetOwner.address(),
        value: values.giver.broxusTip3AssetOwner
    })
    await broxusTip3AssetOwner.deploy()


    // BroxusTip3Asset
    const broxusTip3Asset: BroxusTip3Asset = new BroxusTip3Asset(client, ZERO_KEY_PAIR, {
        _root: await broxusTip3AssetRoot.address(),
        _owner: await broxusTip3AssetOwner.address(),
        _tip3Root: await rootTokenContract.address()
    })
    const tonTokenWallet: TONTokenWallet = new TONTokenWallet(client, ZERO_KEY_PAIR, {
        root_address: await rootTokenContract.address(),
        code: TONTokenWalletContract.code,
        wallet_public_key: ZERO_UINT256,
        owner_address: await broxusTip3Asset.address()
    })


    // Create asset
    await broxusTip3AssetOwner.create({
        root: await broxusTip3AssetRoot.address(),
        value: values.broxusTip3AssetOwner.create.value,
        tip3Root: await rootTokenContract.address(),
        deployValue: values.broxusTip3AssetOwner.create.deployValue,
        balanceAfterDeployment: values.broxusTip3AssetOwner.create.balanceAfterDeployment,
        walletAddress: await tonTokenWallet.address(),
        deployEmptyWalletGrams: values.broxusTip3AssetOwner.create.deployEmptyWalletGrams,
        gasReceiver: await broxusTip3AssetOwner.address()
    })
    await broxusTip3AssetOwner.waitForTransaction()
    await broxusTip3Asset.waitForTransaction()
    await tonTokenWallet.waitForTransaction()


    // Set receive callback
    await broxusTip3AssetOwner.setReceiveCallback({
        value: values.broxusTip3AssetOwner.setReceiveCallback.value,
        gasReceiver: await broxusTip3AssetOwner.address()
    })
    await tonTokenWallet.waitForTransaction()

    const info: GetInfoOut = await broxusTip3AssetOwner.getInfo()
    expect(info.asset).toBe(await broxusTip3Asset.address())
    expect(info.gasReceiver).toBe(await broxusTip3AssetOwner.address())

    await broxusTip3Asset.waitForTransaction()
    expect(await broxusTip3Asset.accountType()).toBe(AccountType.active)

    await tonTokenWallet.waitForTransaction()
    const details: GetDetailsOut = await tonTokenWallet.getDetails()
    expect(await tonTokenWallet.accountType()).toBe(AccountType.active)
    expect(details.balance).toBe('0')
    expect(details.allow_non_notifiable).toBe(true)
    expect(details.owner_address).toBe(await broxusTip3Asset.address())
    expect(details.root_address).toBe(await rootTokenContract.address())
    expect(details.wallet_public_key).toBe(ZERO_UINT256)
    expect(details.bounced_callback).toBe(ZERO_ADDRESS)
    expect(details.receive_callback).toBe(await broxusTip3Asset.address())

    client.close()
}, testTimeout)