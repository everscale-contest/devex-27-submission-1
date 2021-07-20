import {Contract} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import VendorContract from './contracts/Vendor'

export {VendorContract}

export interface InitialData {
    _demiurge: string
    _owner: string
}

export class Vendor extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair, initialData: InitialData) {
        super(client, timeout, {
            abi: VendorContract.abi,
            tvc: VendorContract.tvc,
            initialData: initialData,
            keys: keys
        })
    }
}