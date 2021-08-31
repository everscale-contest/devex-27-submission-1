import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CustomerContract from './contracts/Customer'

export {CustomerContract}

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
    demiurge: string
    owner: string
    assetRoots: {[address: string]: Sender}
    subscriptionRoots: {[address: string]: Sender}
    assets: string[]
    subscriptions: string[]
}

export class Customer extends Contract {
    public static readonly EXTERNAL = {
        createAsset: 'createAsset',
        createSubscription: 'createSubscription',
        clearAssetRoots: 'clearAssetRoots',
        clearSubscriptionRoots: 'clearSubscriptionRoots',
        addAsset: 'addAsset',
        addSubscription: 'addSubscription',
        removeAsset: 'removeAsset',
        removeSubscription: 'removeSubscription',
        callAsset: 'callAsset',
        callSubscription: 'callSubscription',
        onCreateAsset: 'onCreateAsset',
        onCreateSubscription: 'onCreateSubscription'
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

    public async getOnCreateSubscriptionFunction(): Promise<string> {
        return (await this.run('getOnCreateSubscriptionFunction', ZERO_ANSWER_ID_V2)).value.value0
    }
}