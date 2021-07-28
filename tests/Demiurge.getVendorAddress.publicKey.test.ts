import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, x0, ZERO_ADDRESS} from 'jton'
import {Demiurge} from '../src/Demiurge'
import {CustomerContract} from '../src/Customer'
import {Vendor, VendorContract} from '../src/Vendor'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('getVendorAddress.publicKey', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, timeout, demiurgeKeys, {
        _vendorCode: VendorContract.code,
        _customerCode: CustomerContract.code
    })
    const VendorKeys: KeyPair = await getRandomKeyPair(client)
    await giver.sendTransaction({
        dest: await demiurge.address(),
        value: config.contracts.demiurge.requiredForDeployment * B
    })
    await demiurge.deploy()
    const vendorAddress: string = await demiurge.getVendorAddress({
        publicKey: x0(VendorKeys.public),
        owner: ZERO_ADDRESS
    })
    const vendor: Vendor = new Vendor(client, timeout, VendorKeys, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    expect(await vendor.address()).toBe(vendorAddress)
    client.close()
}, testTimeout)