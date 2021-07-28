import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, x0, ZERO_ADDRESS} from 'jton'
import {Demiurge} from '../src/Demiurge'
import {Customer, CustomerContract} from '../src/Customer'
import {VendorContract} from '../src/Vendor'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('getCustomerAddress.publicKey', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, timeout, demiurgeKeys, {
        _vendorCode: VendorContract.code,
        _customerCode: CustomerContract.code
    })
    const customerKeys: KeyPair = await getRandomKeyPair(client)
    await giver.sendTransaction({
        dest: await demiurge.address(),
        value: config.contracts.demiurge.requiredForDeployment * B
    })
    await demiurge.deploy()
    const customerAddress: string = await demiurge.getCustomerAddress({
        publicKey: x0(customerKeys.public),
        owner: ZERO_ADDRESS
    })
    const customer: Customer = new Customer(client, timeout, customerKeys, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    expect(await customer.address()).toBe(customerAddress)
    client.close()
}, testTimeout)