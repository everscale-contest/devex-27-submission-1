import {Contract} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import DemiurgeContract from './contracts/Demiurge'

export {DemiurgeContract}

export interface DeployIn {
    customerCode: string,
    vendorCode: string
}

export interface GetCustomerAddressIn {
    publicKey: number | string
    owner: string
}

export interface GetCustomerAddressOut {
    customer: string
}

export class Demiurge extends Contract {
    public constructor(client: TonClient, timeout: number, keys: KeyPair) {
        super(client, timeout, {
            abi: DemiurgeContract.abi,
            tvc: DemiurgeContract.tvc,
            initialData: {},
            keys: keys
        })
    }


    /**********
     * DEPLOY *
     **********/
    public async deploy(input: DeployIn): Promise<boolean> {
        return await super.deploy(input)
    }

    /***********
     * GETTERS *
     ***********/
    public async getCustomerAddress(input: GetCustomerAddressIn): Promise<GetCustomerAddressOut> {
        return (await this.run('getCustomerAddress', input)).value
    }
}