import {Contract, ZERO_ANSWER_ID} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CrystalStorageRootContract from './contracts/storages/crystal/CrystalStorageRoot'

export {CrystalStorageRootContract}

export interface InitialData {
    _code: string
}

export interface GetAddressIn {
    owner: string
}

export class CrystalStorageRoot extends Contract {
    public static readonly EXTERNAL = {
        create: 'create'
    }

    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: CrystalStorageRootContract.abi,
            tvc: CrystalStorageRootContract.tvc,
            initialData: initialData,
            keys: keys
        }, timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async getCode(): Promise<string> {
        return (await this.run('getCode', ZERO_ANSWER_ID)).value.value0
    }

    public async getAddress(input: GetAddressIn): Promise<string> {
        return (await this.run('getAddress', {...input, ...ZERO_ANSWER_ID})).value.value0
    }
}