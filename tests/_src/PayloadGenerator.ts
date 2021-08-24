import {Contract} from 'jton'
import {KeyPair} from '@tonclient/core/dist/modules'
import {TonClient} from '@tonclient/core'
import PayloadGeneratorContract from './contracts/PayloadGenerator'

export {PayloadGeneratorContract}

export class PayloadGenerator extends Contract {
    public static readonly EXTERNAL = {
        offer: 'offer',
        toOffer: 'toOffer',
        toService: 'toService'
    }

    public constructor(client: TonClient, keys: KeyPair, timeout?: number) {
        super(client, {
            abi: PayloadGeneratorContract.abi,
            tvc: PayloadGeneratorContract.tvc,
            initialData: {},
            keys: keys
        }, timeout)
    }
}