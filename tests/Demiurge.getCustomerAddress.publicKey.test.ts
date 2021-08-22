import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, x0, ZERO_ADDRESS} from 'jton'
import {Demiurge} from '../src/Demiurge'
import {Customer, CustomerContract} from '../src/Customer'
import {VendorContract} from '../src/Vendor'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        demiurge: config.contracts.demiurge.requiredForDeployment * B
    }
}

it('getCustomerAddress.publicKey', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, demiurgeKeys, {
        _vendorCode: VendorContract.code,
        _customerCode: CustomerContract.code
    })
    await giver.sendTransaction({
        dest: await demiurge.address(),
        value: values.giver.demiurge
    })
    await demiurge.deploy()

    const customerKeys: KeyPair = await getRandomKeyPair(client)
    const customerAddress: string = await demiurge.getCustomerAddress({
        publicKey: x0(customerKeys.public),
        owner: ZERO_ADDRESS
    })
    const customer: Customer = new Customer(client, customerKeys, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    expect(await customer.address()).toBe(customerAddress)
    client.close()
}, testTimeout)