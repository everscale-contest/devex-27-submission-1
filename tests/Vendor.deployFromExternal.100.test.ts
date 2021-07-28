import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, ZERO_ADDRESS} from 'jton'
import {Vendor, VendorContract} from '../src/Vendor'
import {Demiurge} from '../src/Demiurge'
import {CustomerContract} from '../src/Customer'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const deployTimeout: number = 20_000

it('deployFromExternal.101', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, timeout, demiurgeKeys, {
        _vendorCode: VendorContract.code,
        _customerCode: CustomerContract.code
    })

    const vendorKeys: KeyPair = await getRandomKeyPair(client)
    const vendor: Vendor = new Vendor(client, deployTimeout, vendorKeys, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    await giver.sendTransaction({
        dest: await vendor.address(),
        value: config.contracts.vendor.requiredForDeployment * B
    })
    let errorCode: number = 0
    try {
        await vendor.deploy()
    } catch (e: any) {
        errorCode = e.data.exit_code ?? e.data.local_error.data.exit_code
    }
    expect(errorCode).toBe(100)
    client.close()
}, testTimeout)