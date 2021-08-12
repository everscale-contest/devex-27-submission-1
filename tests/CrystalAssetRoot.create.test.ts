import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair, ZERO_KEY_PAIR} from 'jton'
import {CrystalAsset, CrystalAssetContract} from '../src/CrystalAsset'
import {CrystalAssetRoot} from '../src/CrystalAssetRoot'
import {CrystalAssetOwner} from './_src/CrystalAssetOwner'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('create', async () => {
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
        value: config.contracts.crystalAssetRoot.requiredForDeployment * B
    })
    await crystalAssetRoot.deploy()
    await giver.sendTransaction({
        dest: await crystalAssetOwner.address(),
        value: 0.8 * B
    })
    await crystalAssetOwner.deploy()
    await crystalAssetOwner.create({
        value: 0.5 * B,
        root: await crystalAssetRoot.address(),
        deployValue: 0.2 * B
    })
    await crystalAssetOwner.waitForTransaction()
    await crystalAsset.waitForTransaction()
    expect(await crystalAsset.accountType()).toBe(AccountType.active)
    expect(await crystalAssetOwner.getAssetAddress()).toBe(await crystalAsset.address())
    client.close()
}, testTimeout)