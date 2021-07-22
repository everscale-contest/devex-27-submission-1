import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair, ZERO_ADDRESS} from 'jton'
import {Customer} from '../src/Customer'
import {Demiurge} from '../src/Demiurge'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const deployTimeout: number = 20_000

it('deployFromExternal', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, timeout, demiurgeKeys)

    const customerKeys: KeyPair = await getRandomKeyPair(client)
    const customer: Customer = new Customer(client, deployTimeout, customerKeys, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    await giver.sendTransaction({
        dest: await customer.address(),
        value: config.contracts.customer.requiredForDeployment * B
    })
    const deployResult: boolean = await customer.deploy()
    expect(deployResult).not.toBeTruthy()
    expect(await customer.accountType()).toBe(AccountType.unInit)
    client.close()
}, testTimeout)