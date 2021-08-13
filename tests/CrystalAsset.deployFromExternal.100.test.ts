import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, ZERO_ADDRESS} from 'jton'
import {CrystalAsset, CrystalAssetContract} from '../src/CrystalAsset'
import {CrystalAssetRoot} from '../src/CrystalAssetRoot'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('deployFromExternal.101', async () => {
    const crystalAssetRootKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAssetRoot: CrystalAssetRoot = new CrystalAssetRoot(client, crystalAssetRootKeys, {
        _code: CrystalAssetContract.code
    })

    const crystalAssetKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAsset: CrystalAsset = new CrystalAsset(client, crystalAssetKeys, {
        _root: await crystalAssetRoot.address(),
        _owner: ZERO_ADDRESS
    })
    await giver.sendTransaction({
        dest: await crystalAsset.address(),
        value: config.contracts.crystalAsset.requiredForDeployment * B
    })
    let errorCode: number = 0
    try {
        await crystalAsset.deploy()
    } catch (e: any) {
        errorCode = e.data?.exit_code ?? e.data?.local_error?.data?.exit_code
    }
    expect(errorCode).toBe(100)
    client.close()
}, testTimeout)