import {Contract, ResultOfCall} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CrystalStorageOwnerContract from './contracts/CrystalStorageOwner'

export {CrystalStorageOwnerContract}

export interface CreateIn {
    value: number | string
    root: string
    deployValue: number | string
}

export class CrystalStorageOwner extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair) {
        super(client, timeout, {
            abi: CrystalStorageOwnerContract.abi,
            tvc: CrystalStorageOwnerContract.tvc,
            initialData: {},
            keys: keys
        })
    }


    /**********
     * PUBLIC *
     **********/
    public async create(input: CreateIn): Promise<ResultOfCall> {
        return await this.call('create', input)
    }


    /***********
     * GETTERS *
     ***********/
    public async getStorageAddress(): Promise<string> {
        return (await this.run('getStorageAddress')).value.value0
    }
}