import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, stringToHex, ZERO_KEY_PAIR} from 'jton'
import {BroxusTip3AssetOwner} from './_src/BroxusTip3AssetOwner'
import {BroxusTip3AssetRoot} from '../src/BroxusTip3AssetRoot'
import {BroxusTip3Asset, BroxusTip3AssetContract} from '../src/BroxusTip3Asset'
import {RootTokenContract} from 'jton-contracts/dist/broxus/fungibleToken/RootTokenContract'
import {TONTokenWalletContract} from 'jton-contracts/dist/broxus/fungibleToken/TONTokenWallet'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        broxusTip3AssetRoot: config.contracts.broxusTip3AssetRoot.requiredForDeployment * B
    }
}

it('getters', async () => {
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


    // RootTokenContract
    const rootTokenContractKeys: KeyPair = await getRandomKeyPair(client)
    const rootTokenContract: RootTokenContract = new RootTokenContract(client, rootTokenContractKeys, {
        _randomNonce: 0,
        name: stringToHex('TEST'),
        symbol: stringToHex('TEST'),
        decimals: 8,
        wallet_code: TONTokenWalletContract.code
    })

    // BroxusTip3Asset
    const broxusTip3AssetKeys: KeyPair = await getRandomKeyPair(client)
    const broxusTip3AssetOwner: BroxusTip3AssetOwner = new BroxusTip3AssetOwner(client, broxusTip3AssetKeys)
    const broxusTip3Asset: BroxusTip3Asset = new BroxusTip3Asset(client, ZERO_KEY_PAIR, {
        _root: await broxusTip3AssetRoot.address(),
        _owner: await broxusTip3AssetOwner.address(),
        _tip3Root: await rootTokenContract.address()
    })


    expect(await broxusTip3AssetRoot.getAddress({
        owner: await broxusTip3AssetOwner.address(),
        tip3Root: await rootTokenContract.address()
    })).toBe(await broxusTip3Asset.address())
    expect(await broxusTip3AssetRoot.getCode()).toBe(BroxusTip3AssetContract.code)
    client.close()
}, testTimeout)