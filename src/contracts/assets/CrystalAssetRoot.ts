import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CrystalAssetRootContract from './crystal/CrystalAssetRoot'

export {CrystalAssetRootContract}

export interface InitialData {
    _code: string
}

export interface GetAddressIn {
    owner: string
}

export class CrystalAssetRoot extends Contract {
    public static readonly EXTERNAL = {
        create: 'create'
    }

    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: CrystalAssetRootContract.abi,
            tvc: CrystalAssetRootContract.tvc,
            initialData: initialData,
            keys: keys
        }, timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async getCode(): Promise<string> {
        return (await this.run('getCode', ZERO_ANSWER_ID_V2)).value.value0
    }

    public async getAddress(input: GetAddressIn): Promise<string> {
        return (await this.run('getAddress', {...input, ...ZERO_ANSWER_ID_V2})).value.value0
    }
}