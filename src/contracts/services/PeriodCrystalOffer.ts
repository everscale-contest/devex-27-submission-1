import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import PeriodCrystalOfferContract from './period/offers/crystal/PeriodCrystalOffer'

export {PeriodCrystalOfferContract}

export interface InitialData {
    _root: string
    _owner: string
    _code: string
}

export interface GetDetailsOut {
    root: string
    owner: string
    price: string
    asset: string
}

export class PeriodCrystalOffer extends Contract {
    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: PeriodCrystalOfferContract.abi,
            tvc: PeriodCrystalOfferContract.tvc,
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

    public async getCode(): Promise<string> {
        return (await this.run('getCode', ZERO_ANSWER_ID_V2)).value.value0
    }
}