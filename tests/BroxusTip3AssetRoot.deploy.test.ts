import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getRandomKeyPair} from 'jton'
import {BroxusTip3AssetRoot} from '../src/contracts/assets/BroxusTip3AssetRoot'
import {BroxusTip3AssetContract} from '../src/contracts/assets/BroxusTip3Asset'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        broxusTip3AssetRoot: config.contracts.broxusTip3AssetRoot.requiredForDeployment * B
    }
}

it('deploy', async () => {
    const broxusTip3AssetRootKeys: KeyPair = await getRandomKeyPair(client)
    const broxusTip3AssetRoot: BroxusTip3AssetRoot = new BroxusTip3AssetRoot(client, broxusTip3AssetRootKeys, {
        _code: BroxusTip3AssetContract.code,
    })
    await giver.sendTransaction({
        dest: await broxusTip3AssetRoot.address(),
        value: values.giver.broxusTip3AssetRoot
    })
    await broxusTip3AssetRoot.deploy()
    expect((await broxusTip3AssetRoot.accountType())).toBe(AccountType.active)
    client.close()
}, testTimeout)