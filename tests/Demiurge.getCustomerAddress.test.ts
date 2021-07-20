import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, ZERO_ADDRESS, ZERO_KEY_PAIR, ZERO_UINT256} from 'jton'
import {Demiurge, GetCustomerAddressOut} from '../src/Demiurge'
import {Customer, CustomerContract} from '../src/Customer'
import {VendorContract} from '../src/Vendor'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('getCustomerAddress', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, timeout, demiurgeKeys)
    await giver.sendTransaction({dest: await demiurge.address(), value: 0.1 * B})
    await demiurge.deploy({
        customerCode: CustomerContract.code,
        vendorCode: VendorContract.code,
    })
    const getCustomerAddressOut: GetCustomerAddressOut = await demiurge.getCustomerAddress({
        publicKey: ZERO_UINT256,
        owner: ZERO_ADDRESS
    })

    const customer: Customer = new Customer(client, timeout, ZERO_KEY_PAIR, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    const customerAddress: string = await customer.address()
    expect(customerAddress).toBe(getCustomerAddressOut.customer)
    client.close()
}, testTimeout)