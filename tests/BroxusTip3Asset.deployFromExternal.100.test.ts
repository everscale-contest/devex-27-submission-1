import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, stringToHex, ZERO_ADDRESS, ZERO_KEY_PAIR, ZERO_UINT256} from 'jton'
import {CrystalAssetContract} from '../src/contracts/assets/CrystalAsset'
import {BroxusTip3AssetRoot} from '../src/contracts/assets/BroxusTip3AssetRoot'
import {BroxusTip3Asset} from '../src/contracts/assets/BroxusTip3Asset'
import {RootTokenContract} from 'jton-contracts/dist/broxus/fungibleToken/RootTokenContract'
import {TONTokenWallet, TONTokenWalletContract} from 'jton-contracts/dist/broxus/fungibleToken/TONTokenWallet'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        broxusTip3Asset: 0.3 * B
    },
    broxusTip3Asset: {
        balanceAfterDeployment: 0.1 * B,
        deployEmptyWalletGrams: 0.1 * B
    }
}

it('deployFromExternal.101', async () => {
    // RootTokenContractOwner + RootTokenContract
    const rootTokenContractKeys: KeyPair = await getRandomKeyPair(client)
    const rootTokenContract: RootTokenContract = new RootTokenContract(client, rootTokenContractKeys, {
        _randomNonce: 0,
        name: stringToHex('TEST'),
        symbol: stringToHex('TEST'),
        decimals: 8,
        wallet_code: TONTokenWalletContract.code
    })


    // BroxusTip3AssetRoot
    const broxusTip3AssetRootKeys: KeyPair = await getRandomKeyPair(client)
    const broxusTip3AssetRoot: BroxusTip3AssetRoot = new BroxusTip3AssetRoot(client, broxusTip3AssetRootKeys, {
        _code: CrystalAssetContract.code
    })


    // BroxusTip3Asset
    const broxusTip3AssetKeys: KeyPair = await getRandomKeyPair(client)
    const broxusTip3Asset: BroxusTip3Asset = new BroxusTip3Asset(client, broxusTip3AssetKeys, {
        _root: await broxusTip3AssetRoot.address(),
        _owner: ZERO_ADDRESS,
        _tip3Root: await rootTokenContract.address()
    })


    // TONTokenWallet
    const tonTokenWallet: TONTokenWallet = new TONTokenWallet(client, ZERO_KEY_PAIR, {
        root_address: await rootTokenContract.address(),
        code: TONTokenWalletContract.code,
        wallet_public_key: ZERO_UINT256,
        owner_address: await broxusTip3Asset.address()
    })

    // Deploy
    await giver.sendTransaction({
        dest: await broxusTip3Asset.address(),
        value: values.giver.broxusTip3Asset
    })
    let errorCode: number = 0
    try {
        await broxusTip3Asset.deploy({
            balanceAfterDeployment: values.broxusTip3Asset.balanceAfterDeployment,
            walletAddress: await tonTokenWallet.address(),
            deployEmptyWalletGrams: values.broxusTip3Asset.deployEmptyWalletGrams,
            gasReceiver: await giver.address()
        })
    } catch (e: any) {
        errorCode = e.data?.exit_code ?? e.data?.local_error?.data?.exit_code
    }
    expect(errorCode).toBe(100)
    client.close()
}, testTimeout)