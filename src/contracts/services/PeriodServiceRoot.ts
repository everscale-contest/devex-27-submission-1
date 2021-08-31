import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import PeriodServiceRootContract from './period/PeriodServiceRoot'

export {PeriodServiceRootContract}

export interface InitialData {
    _serviceCode: string
    _subscriptionCode: string
}

export interface GetServiceAddressIn {
    owner: string
}

export class PeriodServiceRoot extends Contract {
    public static readonly EXTERNAL = {
        create: 'create'
    }

    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: PeriodServiceRootContract.abi,
            tvc: PeriodServiceRootContract.tvc,
            initialData: initialData,
            keys: keys
        }, timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async getServiceCode(): Promise<string> {
        return (await this.run('getServiceCode', ZERO_ANSWER_ID_V2)).value.value0
    }

    public async getSubscriptionCode(): Promise<string> {
        return (await this.run('getSubscriptionCode', ZERO_ANSWER_ID_V2)).value.value0
    }

    public async getServiceAddress(input: GetServiceAddressIn): Promise<string> {
        return (await this.run('getServiceAddress', {...ZERO_ANSWER_ID_V2, ...input})).value.value0
    }
}