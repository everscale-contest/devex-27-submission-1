import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import BroxusTip3AssetContract from './contracts/assets/broxusTip3/BroxusTip3Asset'

export {BroxusTip3AssetContract}

export interface InitialData {
    _root: string
    _owner: string
    _tip3Root: string
}

export interface GetDetailsOut {
    root: string
    owner: string
    tip3Root: string
    wallet: string
}

export class BroxusTip3Asset extends Contract {
    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: BroxusTip3AssetContract.abi,
            tvc: BroxusTip3AssetContract.tvc,
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
}