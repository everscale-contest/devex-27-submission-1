import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair, ZERO_ADDRESS} from 'jton'
import {Vendor} from '../src/Vendor'
import {Demiurge} from '../src/Demiurge'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const deployTimeout: number = 20_000

it('deployFromExternal', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, timeout, demiurgeKeys)

    const vendorKeys: KeyPair = await getRandomKeyPair(client)
    const vendor: Vendor = new Vendor(client, deployTimeout, vendorKeys, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    await giver.sendTransaction({
        dest: await vendor.address(),
        value: config.contracts.vendor.requiredForDeployment * B
    })
    const deployResult: boolean = await vendor.deploy()
    expect(deployResult).not.toBeTruthy()
    expect(await vendor.accountType()).toBe(AccountType.unInit)
    client.close()
}, testTimeout)