import {Contract, ResultOfCall} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import BroxusTip3AssetOwnerContract from './contracts/BroxusTip3AssetOwner'

export {BroxusTip3AssetOwnerContract}

export interface CreateIn {
    root: string
    value: number | string
    tip3Root: string
    deploymentValue: number | string
    balanceAfterDeployment: number | string
    walletAddress: string
    deployEmptyWalletGrams: number | string
    gasReceiver: string
}

export interface GetInfoOut {
    asset: string
    gasReceiver: string
    service: string
    payload: string
}

export interface SetReceiveCallbackIn {
    value: number | string
    gasReceiver: string
}

export class BroxusTip3AssetOwner extends Contract {
    public constructor(client: TonClient, keys: KeyPair, timeout?: number) {
        super(client, {
            abi: BroxusTip3AssetOwnerContract.abi,
            tvc: BroxusTip3AssetOwnerContract.tvc,
            initialData: {},
            keys: keys
        }, timeout)
    }


    /**********
     * PUBLIC *
     **********/
    public async create(input: CreateIn): Promise<ResultOfCall> {
        return await this.call('create', input)
    }

    public async setReceiveCallback(input: SetReceiveCallbackIn): Promise<ResultOfCall> {
        return await this.call('setReceiveCallback', input)
    }


    /***********
     * GETTERS *
     ***********/
    public async getInfo(): Promise<GetInfoOut> {
        return (await this.run('getInfo')).value
    }
}