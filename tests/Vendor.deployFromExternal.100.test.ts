import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {B, getRandomKeyPair, ZERO_ADDRESS} from 'jton'
import {Vendor, VendorContract} from '../src/Vendor'
import {Demiurge} from '../src/Demiurge'
import {CustomerContract} from '../src/Customer'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        vendor: config.contracts.vendor.requiredForDeployment * B
    },
    vendor: {
        balanceAfterDeployment: 0.01 * B
    }
}

it('deployFromExternal.101', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, demiurgeKeys, {
        _vendorCode: VendorContract.code,
        _customerCode: CustomerContract.code
    })

    const vendorKeys: KeyPair = await getRandomKeyPair(client)
    const vendor: Vendor = new Vendor(client, vendorKeys, {
        _demiurge: await demiurge.address(),
        _owner: ZERO_ADDRESS
    })
    await giver.sendTransaction({
        dest: await vendor.address(),
        value: values.giver.vendor
    })
    let errorCode: number = 0
    try {
        await vendor.deploy({
            balanceAfterDeployment: values.vendor.balanceAfterDeployment,
            gasReceiver: await giver.address()
        })
    } catch (e: any) {
        errorCode = e.data?.exit_code ?? e.data?.local_error?.data?.exit_code
    }
    expect(errorCode).toBe(100)
    client.close()
}, testTimeout)