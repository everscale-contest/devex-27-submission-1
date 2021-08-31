import {Contract} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import PeriodSubscriptionContract from './period/PeriodSubscription'

export {PeriodSubscriptionContract}

export interface InitialData {
    _service: string
    _owner: string
}

export class PeriodSubscription extends Contract {
    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: PeriodSubscriptionContract.abi,
            tvc: PeriodSubscriptionContract.tvc,
            initialData: initialData,
            keys: keys
        }, timeout)
    }
}