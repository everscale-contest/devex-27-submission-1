import {Contract, ZERO_ANSWER_ID} from 'jton'
import {KeyPair, ResultOfProcessMessage} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import DemiurgeContract from './contracts/Demiurge'

export {DemiurgeContract}

export interface InitialData {
    _vendorCode: string
    _customerCode: string
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

    public constructor(client: TonClient, timeout: number, keys: KeyPair, initialData: InitialData) {
        super(client, timeout, {
            abi: DemiurgeContract.abi,
            tvc: DemiurgeContract.tvc,
            initialData: initialData,
            keys: keys
        })
    }


    /**********
     * DEPLOY *
     **********/
    public async deploy(timeout?: number): Promise<ResultOfProcessMessage> {
        return await super.deploy(timeout)
    }


    /***********
     * GETTERS *
     ***********/
    public async getCustomerCode(): Promise<string> {
        return (await this.run('getCustomerCode', ZERO_ANSWER_ID)).value.value0
    }

    public async getVendorCode(): Promise<string> {
        return (await this.run('getVendorCode', ZERO_ANSWER_ID)).value.value0
    }

    public async getCustomerAddress(input: GetCustomerAddressIn): Promise<string> {
        return (await this.run('getCustomerAddress', {...input, ...ZERO_ANSWER_ID})).value.value0
    }

    public async getVendorAddress(input: GetVendorAddressIn): Promise<string> {
        return (await this.run('getVendorAddress', {...input, ...ZERO_ANSWER_ID})).value.value0
    }
}