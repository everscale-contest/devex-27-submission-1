import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, ZERO_ADDRESS} from 'jton'
import {Customer, CustomerContract} from '../src/Customer'
import {Demiurge} from '../src/Demiurge'
import {VendorContract} from '../src/Vendor'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const deployTimeout: number = 15_000

it('deployFromExternal', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, demiurgeKeys, {
        _vendorCode: VendorContract.code,
        _customerCode: CustomerContract.code
    })

    const customerKeys: KeyPair = await getRandomKeyPair(client)
    const customer: Customer = new Customer(client, customerKeys, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    await giver.sendTransaction({
        dest: await customer.address(),
        value: config.contracts.customer.requiredForDeployment * B
    })
    let errorCode: number = 0
    try {
        await customer.deploy({}, deployTimeout)
    } catch (e: any) {
        errorCode = e.data?.exit_code ?? e.data?.local_error?.data?.exit_code
    }
    expect(errorCode).toBe(100)
    client.close()
}, testTimeout)