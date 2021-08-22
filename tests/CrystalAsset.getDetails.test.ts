import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getNetConfig, getRandomKeyPair, ZERO_ADDRESS, ZERO_KEY_PAIR} from 'jton'
import {CrystalAsset, CrystalAssetContract, GetDetailsOut} from '../src/CrystalAsset'
import {CrystalAssetRoot} from '../src/CrystalAssetRoot'
import {CrystalAssetOwner} from './_src/CrystalAssetOwner'
import {NetConfig} from 'jton/src/config/index'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const netConfig: NetConfig = getNetConfig(config)
const values = {
    giver: {
        crystalAssetOwner: config.contracts.crystalAssetRoot.requiredForDeployment * B
    },
    crystalAssetOwner: {
        requiredForDeployment: 0.8 * B,
        create: {
            value: 0.5 * B,
            deploymentValue: 0.3 * B,
            balanceAfterDeployment: 0.1 * B
        }
    }
}

it('getDetails', async () => {
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
        value: values.giver.crystalAssetOwner
    })
    await crystalAssetRoot.deploy()
    await giver.sendTransaction({
        dest: await crystalAssetOwner.address(),
        value: values.crystalAssetOwner.requiredForDeployment
    })
    await crystalAssetOwner.deploy()
    await crystalAssetOwner.create({
        value: values.crystalAssetOwner.create.value,
        root: await crystalAssetRoot.address(),
        deploymentValue: values.crystalAssetOwner.create.deploymentValue,
        balanceAfterDeployment: values.crystalAssetOwner.create.balanceAfterDeployment,
        gasReceiver: ZERO_ADDRESS
    })
    await crystalAsset.waitForTransaction()
    const balance: number = parseInt(await crystalAsset.balance())
    const details: GetDetailsOut = await crystalAsset.getDetails()
    const detailsBalance: number = parseInt(details.balance)
    const balanceDiff: number = detailsBalance - balance
    expect(details.root).toBe(await crystalAssetRoot.address())
    expect(details.owner).toBe(await crystalAssetOwner.address())
    expect(Math.abs(balanceDiff) < netConfig.transactions.tolerance).toBeTruthy()
    expect(1).toBe(1)
    client.close()
}, testTimeout)