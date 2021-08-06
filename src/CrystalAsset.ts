import {Contract} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CrystalAssetContract from './contracts/assets/crystal/CrystalAsset'

export {CrystalAssetContract}

export interface InitialData {
    _root: string
    _owner: string
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
}