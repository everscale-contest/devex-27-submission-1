import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair, ZERO_KEY_PAIR} from 'jton'
import {CrystalStorage, CrystalStorageContract} from '../src/CrystalStorage'
import {CrystalStorageRoot} from '../src/CrystalStorageRoot'
import {CrystalStorageOwner} from './_src/CrystalStorageOwner'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('create', async () => {
    const crystalStorageRootKeys: KeyPair = await getRandomKeyPair(client)
    const crystalStorageRoot: CrystalStorageRoot = new CrystalStorageRoot(client, crystalStorageRootKeys, {
            _code: CrystalStorageContract.code
        }
    )
    const crystalStorageOwnerKeys: KeyPair = await getRandomKeyPair(client)
    const crystalStorageOwner: CrystalStorageOwner = new CrystalStorageOwner(client, crystalStorageOwnerKeys)
    const crystalStorage: CrystalStorage = new CrystalStorage(client, ZERO_KEY_PAIR, {
        _root: await crystalStorageRoot.address(),
        _owner: await crystalStorageOwner.address()
    })
    await giver.sendTransaction({
        dest: await crystalStorageRoot.address(),
        value: config.contracts.crystalStorageRoot.requiredForDeployment * B
    })
    await crystalStorageRoot.deploy()
    await giver.sendTransaction({
        dest: await crystalStorageOwner.address(),
        value: 0.8 * B
    })
    await crystalStorageOwner.deploy()
    await crystalStorageOwner.create({
        value: 0.5 * B,
        root: await crystalStorageRoot.address(),
        deployValue: 0.2 * B
    })
    await crystalStorageOwner.waitForTransaction()
    await crystalStorage.waitForTransaction()
    expect(await crystalStorage.accountType()).toBe(AccountType.active)
    expect(await crystalStorageOwner.getStorageAddress()).toBe(await crystalStorage.address())
    client.close()
}, testTimeout)