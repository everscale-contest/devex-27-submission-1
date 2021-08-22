import {Contract} from 'jton'
import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CustomerContract from './contracts/Customer'

export {CustomerContract}

export interface InitialData {
    _demiurge: string
    _owner: string
}

export interface DeployIn {
    balanceAfterDeployment: number | string
    gasReceiver: string
}

export class Customer extends Contract {
    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: CustomerContract.abi,
            tvc: CustomerContract.tvc,
            initialData: initialData,
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