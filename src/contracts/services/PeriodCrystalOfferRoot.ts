import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import PeriodCrystalOfferRootContract from './period/offers/crystal/PeriodCrystalOfferRoot'

export {PeriodCrystalOfferRootContract}

export interface InitialData {
    _offerCode: string
    _accepterCode: string
}

export interface GetOfferAddressIn {
    owner: string
}

export class PeriodCrystalOfferRoot extends Contract {
    public static readonly EXTERNAL = {
        create: 'create'
    }

    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: PeriodCrystalOfferRootContract.abi,
            tvc: PeriodCrystalOfferRootContract.tvc,
            initialData: initialData,
            keys: keys
        }, timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async getOfferCode(): Promise<string> {
        return (await this.run('getOfferCode', ZERO_ANSWER_ID_V2)).value.value0
    }

    public async getOfferAddress(input: GetOfferAddressIn): Promise<string> {
        return (await this.run('getOfferAddress', {...ZERO_ANSWER_ID_V2, ...input})).value.value0
    }
}