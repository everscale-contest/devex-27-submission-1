import {Contract} from 'jton'
import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import BroxusTip3RootOwnerContract from './contracts/RootTokenContractOwner'

export {BroxusTip3RootOwnerContract}

export interface DeployIn {
    root: string
}

export class RootTokenContractOwner extends Contract {
    public static readonly EXTERNAL = {
        mint: 'mint'
    }

    public constructor(client: TonClient, keys: KeyPair, timeout?: number) {
        super(client, {
            abi: BroxusTip3RootOwnerContract.abi,
            tvc: BroxusTip3RootOwnerContract.tvc,
            initialData: {},
            keys: keys
        }, timeout)
    }


    /**********
     * DEPLOY *
     **********/
    public async deploy(input: DeployIn, timeout?: number): Promise<ResultOfProcessMessage> {
        return await super.deploy(input, timeout)
    }
}