import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CustomerContract from './contracts/Customer'
import {GetDetailsOut} from './Vendor'

export {CustomerContract}

export interface InitialData {
    _demiurge: string
    _owner: string
}

export interface DeployIn {
    balanceAfterDeployment: number | string
    gasReceiver: string
}

export class Customer extends Contract {
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
            abi: CustomerContract.abi,
            tvc: CustomerContract.tvc,
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

    public async getOnCreateAssetFunction(): Promise<string> {
        return (await this.run('getOnCreateAssetFunction', ZERO_ANSWER_ID_V2)).value.value0
    }

    public async getOnCreateServiceFunction(): Promise<string> {
        return (await this.run('getOnCreateServiceFunction', ZERO_ANSWER_ID_V2)).value.value0
    }
}