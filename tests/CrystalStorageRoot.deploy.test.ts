import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair} from 'jton'
import {CrystalStorageContract} from '../src/CrystalStorage'
import {CrystalStorageRoot} from '../src/CrystalStorageRoot'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('deploy', async () => {
    const crystalStorageRootKeys: KeyPair = await getRandomKeyPair(client)
    const crystalStorageRoot: CrystalStorageRoot = new CrystalStorageRoot(client, crystalStorageRootKeys, {
        _code: CrystalStorageContract.code,
    })
    await giver.sendTransaction({
        dest: await crystalStorageRoot.address(),
        value: config.contracts.crystalStorageRoot.requiredForDeployment * B
    })
    await crystalStorageRoot.deploy()
    expect((await crystalStorageRoot.accountType())).toBe(AccountType.active)
    client.close()
}, testTimeout)