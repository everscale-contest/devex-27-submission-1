import {Contract, ZERO_ANSWER_ID_V2} from 'jton'
import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import CrystalAssetContract from './crystal/CrystalAsset'

export {CrystalAssetContract}

export interface InitialData {
    _root: string
    _owner: string
}

export interface DeployIn {
    balanceAfterDeployment: number | string
    gasReceiver: string
}

export interface GetDetailsOut {
    root: string
    owner: string
    balance: string
}

export class CrystalAsset extends Contract {
    public static readonly EXTERNAL = {
        transfer: 'transfer',
        withdraw: 'withdraw',
        withdrawAll: 'withdrawAll'
    }

    public constructor(client: TonClient, keys: KeyPair, initialData: InitialData, timeout?: number) {
        super(client, {
            abi: CrystalAssetContract.abi,
            tvc: CrystalAssetContract.tvc,
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