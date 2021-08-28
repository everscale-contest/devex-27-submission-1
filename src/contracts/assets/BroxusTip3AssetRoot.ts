import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import BroxusTip3AssetRootContract from './broxusTip3/BroxusTip3AssetRoot'

export {BroxusTip3AssetRootContract}

export interface InitialData {
    _code: string
}

export interface GetAddressIn {
    owner: string
    tip3Root: string
}

export class BroxusTip3AssetRoot extends Contract {
    public static readonly EXTERNAL = {
        create: 'create'
    }

    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: BroxusTip3AssetRootContract.abi,
            tvc: BroxusTip3AssetRootContract.tvc,
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