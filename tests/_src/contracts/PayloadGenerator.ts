const PayloadGeneratorContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "toService",
                "inputs": [
                    {
                        "name": "service",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "toOffer",
                "inputs": [
                    {
                        "name": "offer",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "offer",
                "inputs": [
                    {
                        "name": "assetBits",
                        "type": "uint32"
                    },
                    {
                        "name": "assetAddress",
                        "type": "address"
                    },
                    {
                        "name": "assetValue",
                        "type": "uint128"
                    },
                    {
                        "name": "months",
                        "type": "uint32"
                    },
                    {
                        "name": "withDiscount",
                        "type": "uint32"
                    },
                    {
                        "name": "accepter",
                        "type": "address"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            }
        ]
    },
    tvc: "te6ccgECEgEAAfEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsPBQQRAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAgGA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Dg4GBFAgghAaZIHhuuMCIIIQWACnEbrjAiCCEFmv7XC64wIgghBotV8/uuMCCwsJBwIkMPhCbuMA+Ebyc9H4ANs8f/hnCAwBPu1E0NdJwgGKjhRw7UTQ9AWAQPQO8r3XC//4YnD4Y+INApIw+Eby4EzTH/pBldTR0PpA39cNf5XU0dDTf9/XDR+V1NHQ0x/f1w0fldTR0NMf3/pBldTR0PpA3/pBldTR0PpA39HbPOMAf/hnCgwABF8HAmgw+Eby4Ez4Qm7jAPpBldTR0PpA3yDXS8ABAcAAsJPU0dDe1PpBldTR0PpA39FfA9s8f/hnDQwAHPhD+ELIy//LP8+Dye1UAB7tRNDT/9M/0wAx0fhj+GIACvhG8uBMAgr0pCD0oREQABRzb2wgMC40OC4wAAA=",
    code: "te6ccgECDwEAAcQABCSK7VMg4wMgwP/jAiDA/uMC8gsMAgEOAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAUDA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8CwsDBFAgghAaZIHhuuMCIIIQWACnEbrjAiCCEFmv7XC64wIgghBotV8/uuMCCAgGBAIkMPhCbuMA+Ebyc9H4ANs8f/hnBQkBPu1E0NdJwgGKjhRw7UTQ9AWAQPQO8r3XC//4YnD4Y+IKApIw+Eby4EzTH/pBldTR0PpA39cNf5XU0dDTf9/XDR+V1NHQ0x/f1w0fldTR0NMf3/pBldTR0PpA3/pBldTR0PpA39HbPOMAf/hnBwkABF8HAmgw+Eby4Ez4Qm7jAPpBldTR0PpA3yDXS8ABAcAAsJPU0dDe1PpBldTR0PpA39FfA9s8f/hnCgkAHPhD+ELIy//LP8+Dye1UAB7tRNDT/9M/0wAx0fhj+GIACvhG8uBMAgr0pCD0oQ4NABRzb2wgMC40OC4wAAA=",
    codeHash: "e3010fb488884e7cd418a055619f0a4decf3eabaca33053406129c3906f8cff0",
};
export default PayloadGeneratorContract;