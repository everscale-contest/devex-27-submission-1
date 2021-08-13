import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CrystalAssetContract from './contracts/assets/crystal/CrystalAsset'

export {CrystalAssetContract}

export interface InitialData {
    _root: string
    _owner: string
}

export interface GetDetailsOut {
    root: string
    owner: string
    balance: string
}

export class CrystalAsset extends Contract {
    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: CrystalAssetContract.abi,
            tvc: CrystalAssetContract.tvc,
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