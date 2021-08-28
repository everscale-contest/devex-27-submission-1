import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import VendorContract from './contracts/Vendor'

export {VendorContract}

export interface InitialData {
    _demiurge: string
    _owner: string
}

export interface DeployIn {
    balanceAfterDeployment: number | string
    gasReceiver: string
}

export interface Sender {
    count: string
    expireAt: string
}

export interface GetDetailsOut {
    demiurge: string,
    owner: string,
    assetRoots: {[address: string]: Sender},
    serviceRoots: {[address: string]: Sender},
    assets: string[],
    services: string[]
}

export class Vendor extends Contract {
    public static readonly EXTERNAL = {
        createAsset: 'createAsset',
        createService: 'createService',
        clearAssetRoots: 'clearAssetRoots',
        clearServiceRoots: 'clearServiceRoots',
        addAsset: 'addAsset',
        addService: 'addService',
        removeAsset: 'removeAsset',
        removeService: 'removeService',
        callAsset: 'callAsset',
        callService: 'callService',
        onCreateAsset: 'onCreateAsset',
        onCreateService: 'onCreateService'
    }

    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: VendorContract.abi,
            tvc: VendorContract.tvc,
            initialData: initialData,
            keys: keys
        }, timeout)
    }


    /**********
     * DEPLOY *
     **********/
    public async deploy(input: DeployIn, timeout?: number): Promise<ResultOfProcessMessage> {
        return await super.deploy(input, timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async getDetails(): Promise<GetDetailsOut> {
        return (await this.run('getDetails', ZERO_ANSWER_ID_V2)).value
    }
}