import {Contract} from 'jton'
import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import DemiurgeContract from './contracts/Demiurge'

export {DemiurgeContract}

export interface DeployIn {
    vendorCode: string,
    customerCode: string
}

export interface GetCustomerAddressIn {
    publicKey: number | string
    owner: string
}

export interface GetVendorAddressIn {
    publicKey: number | string
    owner: string
}

export class Demiurge extends Contract {
    public static readonly EXTERNAL = {
        createCustomer: 'createCustomer',
        createVendor: 'createVendor'
    }

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
    public async deploy(input: DeployIn, timeout?: number): Promise<ResultOfProcessMessage> {
        return await super.deploy(input, timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async getCustomerCode(): Promise<string> {
        return (await this.run('getCustomerCode')).value.value0
    }

    public async getVendorCode(): Promise<string> {
        return (await this.run('getVendorCode')).value.value0
    }

    public async getCustomerAddress(input: GetCustomerAddressIn): Promise<string> {
        return (await this.run('getCustomerAddress', input)).value.value0
    }

    public async getVendorAddress(input: GetVendorAddressIn): Promise<string> {
        return (await this.run('getVendorAddress', input)).value.value0
    }
}