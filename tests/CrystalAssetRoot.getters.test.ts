import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, ZERO_KEY_PAIR} from 'jton'
import {CrystalAsset, CrystalAssetContract} from '../src/contracts/assets/CrystalAsset'
import {CrystalAssetRoot} from '../src/contracts/assets/CrystalAssetRoot'
import {CrystalAssetOwner} from './_src/CrystalAssetOwner'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        crystalAssetRoot: config.contracts.crystalAssetRoot.requiredForDeployment * B
    }
}

it('getters', async () => {
    const crystalAssetRootKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAssetRoot: CrystalAssetRoot = new CrystalAssetRoot(client, crystalAssetRootKeys, {
            _code: CrystalAssetContract.code
        }
    )
    const crystalAssetOwnerKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAssetOwner: CrystalAssetOwner = new CrystalAssetOwner(client, crystalAssetOwnerKeys)
    const crystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
        _root: await crystalAssetRoot.address(),
        _owner: await crystalAssetOwner.address()
    })
    await giver.sendTransaction({
        dest: await crystalAssetRoot.address(),
        value: values.giver.crystalAssetRoot
    })
    await crystalAssetRoot.deploy()
    expect(await crystalAssetRoot.getAddress({
        owner: await crystalAssetOwner.address()
    })).toBe(await crystalAsset.address())
    expect(await crystalAssetRoot.getCode()).toBe(CrystalAssetContract.code)
    client.close()
}, testTimeout)