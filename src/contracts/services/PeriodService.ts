import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import PeriodServiceContract from './period/PeriodService'

export {PeriodServiceContract}

export interface InitialData {
    _root: string
    _owner: string
    _subscriptionCode: string
}

export interface Sender {
    count: string
    expireAt: string
}

export interface GetDetailsOut {
    root: string
    owner: string
    periodDuration: string
    offerRoots: {[address: string]: Sender}
    offers: {[address: string]: Sender}
}

export interface GetSubscriptionAddressIn {
    owner: string
}

export class PeriodService extends Contract {
    public static readonly EXTERNAL = {
        createSubscription: 'createSubscription',
        createOffer: 'createOffer',
        clearOfferRoots: 'clearOfferRoots',
        addOffer: 'addOffer',
        removeOffer: 'removeOffer',
        callOffer: 'callOffer',
        onCreateOffer: 'onCreateOffer'
    }

    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: PeriodServiceContract.abi,
            tvc: PeriodServiceContract.tvc,
            initialData: initialData,
            keys: keys
        }, timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async getDetails(): Promise<GetDetailsOut> {
        return (await this.run('getDetails', ZERO_ANSWER_ID_V2)).value
    }

    public async getOnCreateOfferFunction(): Promise<string> {
        return (await this.run('getOnCreateOfferFunction', ZERO_ANSWER_ID_V2)).value.value0
    }

    public async getSubscriptionCode(): Promise<string> {
        return (await this.run('getSubscriptionCode', ZERO_ANSWER_ID_V2)).value.value0
    }

    public async getSubscriptionAddress(input: GetSubscriptionAddressIn): Promise<string> {
        return (await this.run('getSubscriptionAddress', {...ZERO_ANSWER_ID_V2, ...input})).value.value0
    }
}