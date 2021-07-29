import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, ZERO_KEY_PAIR} from 'jton'
import {CrystalStorage, CrystalStorageContract} from '../src/CrystalStorage'
import {CrystalStorageRoot} from '../src/CrystalStorageRoot'
import {CrystalStorageOwner} from './_src/CrystalStorageOwner'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('create', async () => {
    const crystalStorageRootKeys: KeyPair = await getRandomKeyPair(client)
    const crystalStorageRoot: CrystalStorageRoot = new CrystalStorageRoot(client, timeout, crystalStorageRootKeys, {
            _code: CrystalStorageContract.code
        }
    )
    const crystalStorageOwnerKeys: KeyPair = await getRandomKeyPair(client)
    const crystalStorageOwner: CrystalStorageOwner = new CrystalStorageOwner(client, timeout, crystalStorageOwnerKeys)
    const crystalStorage: CrystalStorage = new CrystalStorage(client, timeout, ZERO_KEY_PAIR, {
        _root: await crystalStorageRoot.address(),
        _owner: await crystalStorageOwner.address()
    })
    await giver.sendTransaction({
        dest: await crystalStorageRoot.address(),
        value: config.contracts.crystalStorageRoot.requiredForDeployment * B
    })
    await crystalStorageRoot.deploy()
    expect(await crystalStorageRoot.getAddress({
        owner: await crystalStorageOwner.address()
    })).toBe(await crystalStorage.address())
    expect(await crystalStorageRoot.getCode()).toBe(CrystalStorageContract.code)
    client.close()
}, testTimeout)