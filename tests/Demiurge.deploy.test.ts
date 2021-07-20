import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair} from 'jton'
import {Demiurge} from '../src/Demiurge'
import {CustomerContract} from '../src/Customer'
import {VendorContract} from '../src/Vendor'

const {client, timeout, giver} = prepareGiverV2(config, config.contracts.giver.keys)

it('deploy', async () => {
    const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
    const demiurge: Demiurge = new Demiurge(client, timeout, demiurgeKeys)
    await giver.sendTransaction({dest: await demiurge.address(), value: 0.1 * B})
    await demiurge.deploy({
        customerCode: CustomerContract.code,
        vendorCode: VendorContract.code,
    })
    expect((await demiurge.accountType())).toBe(AccountType.active)
    client.close()
}, testTimeout)