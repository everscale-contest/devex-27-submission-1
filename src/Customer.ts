import {Contract} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CustomerContract from './contracts/Customer'

export {CustomerContract}

export interface InitialData {
    _demiurge: string
    _owner: string
}

export class Customer extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair, initialData: InitialData) {
        super(client, timeout, {
            abi: CustomerContract.abi,
            tvc: CustomerContract.tvc,
            initialData: initialData,
            keys: keys
        })
    }
}