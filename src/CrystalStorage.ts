import {Contract} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CrystalStorageContract from './contracts/storages/crystal/CrystalStorage'

export {CrystalStorageContract}

export interface InitialData {
    _root: string
    _owner: string
}

export class CrystalStorage extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair, initialData: InitialData) {
        super(client, timeout, {
            abi: CrystalStorageContract.abi,
            tvc: CrystalStorageContract.tvc,
            initialData: initialData,
            keys: keys
        })
    }
}