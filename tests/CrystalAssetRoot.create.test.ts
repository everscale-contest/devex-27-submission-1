import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getNetConfig, getRandomKeyPair, NetConfig, ZERO_ADDRESS, ZERO_KEY_PAIR} from 'jton'
import {CrystalAsset, CrystalAssetContract} from '../src/contracts/assets/CrystalAsset'
import {CrystalAssetRoot} from '../src/contracts/assets/CrystalAssetRoot'
import {CrystalAssetOwner, GetInfoOut} from './_src/CrystalAssetOwner'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const netConfig: NetConfig = getNetConfig(config)
const values = {
    giver: {
        crystalAssetRoot: config.contracts.crystalAssetRoot.requiredForDeployment * B,
        crystalAssetOwner: 0.8 * B
    },
    crystalAssetOwner: {
        create: {
            value: 0.5 * B,
            deploymentValue: 0.2 * B,
            balanceAfterDeployment: 0.1 * B
        }
    }
}
it('create', async () => {
    const gasReceiver: string = ZERO_ADDRESS
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


    const crystalAssetOwnerKeys: KeyPair = await getRandomKeyPair(client)
    const crystalAssetOwner: CrystalAssetOwner = new CrystalAssetOwner(client, crystalAssetOwnerKeys)
    const crystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
        _root: await crystalAssetRoot.address(),
        _owner: await crystalAssetOwner.address()
    })
    await giver.sendTransaction({
        dest: await crystalAssetOwner.address(),
        value: values.giver.crystalAssetOwner
    })
    await crystalAssetOwner.deploy()


    await crystalAssetOwner.create({
        value: values.crystalAssetOwner.create.value,
        root: await crystalAssetRoot.address(),
        deploymentValue: values.crystalAssetOwner.create.deploymentValue,
        balanceAfterDeployment: values.crystalAssetOwner.create.balanceAfterDeployment,
        gasReceiver: gasReceiver
    })
    await crystalAssetOwner.waitForTransaction()
    await crystalAsset.waitForTransaction()


    const info: GetInfoOut = await crystalAssetOwner.getInfo()
    const balanceAfterDeployment: number = parseInt(await crystalAsset.balance())
    const balanceDiff: number = balanceAfterDeployment - values.crystalAssetOwner.create.balanceAfterDeployment
    expect(await crystalAsset.accountType()).toBe(AccountType.active)
    expect(info.asset).toBe(await crystalAsset.address())
    expect(info.gasReceiver).toBe(gasReceiver)
    expect(Math.abs(balanceDiff) < netConfig.transactions.tolerance).toBeTruthy()
    client.close()
}, testTimeout)