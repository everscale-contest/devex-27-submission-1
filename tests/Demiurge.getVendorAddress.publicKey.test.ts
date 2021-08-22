import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, x0, ZERO_ADDRESS} from 'jton'
import {Demiurge} from '../src/Demiurge'
import {CustomerContract} from '../src/Customer'
import {Vendor, VendorContract} from '../src/Vendor'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        demiurge: config.contracts.demiurge.requiredForDeployment * B
    }
}


it('getVendorAddress.publicKey', async () => {
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

    const vendorKeys: KeyPair = await getRandomKeyPair(client)
    const vendor: Vendor = new Vendor(client, vendorKeys, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    const vendorAddress: string = await demiurge.getVendorAddress({
        publicKey: x0(vendorKeys.public),
        owner: ZERO_ADDRESS
    })
    expect(await vendor.address()).toBe(vendorAddress)
    client.close()
}, testTimeout)