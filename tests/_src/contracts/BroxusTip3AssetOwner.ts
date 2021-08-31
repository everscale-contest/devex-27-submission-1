const BroxusTip3AssetOwnerContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "tip3Root",
                        "type": "address"
                    },
                    {
                        "name": "deploymentValue",
                        "type": "uint128"
                    },
                    {
                        "name": "balanceAfterDeployment",
                        "type": "uint128"
                    },
                    {
                        "name": "walletAddress",
                        "type": "address"
                    },
                    {
                        "name": "deployEmptyWalletGrams",
                        "type": "uint128"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setReceiveCallback",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onCreate",
                "inputs": [
                    {
                        "name": "asset",
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
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "asset",
                        "type": "address"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    },
                    {
                        "name": "service",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ]
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
            },
            {
                "name": "_asset",
                "type": "address"
            },
            {
                "name": "_gasReceiver",
                "type": "address"
            },
            {
                "name": "_service",
                "type": "address"
            },
            {
                "name": "_payload",
                "type": "cell"
            }
        ]
    },
    tvc: "te6ccgECGwEAA9sAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsYBQQaAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAoGA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FxcGAiggghAaZIHhu+MCIIIQeb09NrvjAg0HAiggghBotV8/uuMCIIIQeb09NrrjAgkIAlAw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39EB+Gr4a9s8f/hnFhQCJDD4Qm7jAPhG8nPR+ADbPH/4ZwoUAhbtRNDXScIBio6A4hYLAv5w7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyI+G2AQPQOGgwAFPK91wv/+GJw+GMEUCCCEAyZoFu64wIgghAQa1j9uuMCIIIQFxEIubrjAiCCEBpkgeG64wITEQ8OAnQw+Eby4Ez4Qm7jAPpBldTR0PpA3yDXS8ABAcAAsJPU0dDe1PpBldTR0PpA39FY+GwB+G34a9s8f/hnFhQDPDD4RvLgTPhCbuMA03/6QZXU0dD6QN/R2zzbPH/4ZxYQFABA+AAB+ErIz4WIzgH6AnHPC2oByM+Q/WGD7s7NyYBA+wACtDD4RvLgTPpBldTR0PpA39cNf5XU0dDTf9/6QZXU0dD6QN/XDX+V1NHQ03/f1w1/ldTR0NN/3/pBldTR0PpA39cNf5XU0dDTf9/6QZXU0dD6QN/R2zzjAH/4ZxIUAHr4AAJVAlUDVQRVBVUGyM+FiM4B+gJxzwtqVVDIz5DdDPtCz5Hm9PTazst/y39VIMjOy38ByM7Nzc3JcPsAA4gw+Eby4Ez4Qm7jANHbPCSOKibQ0wH6QDAxyM+HIM5xzwthXjDIz5IyZoFuzlUgyM5ZyM7Mzc3NyXD7AJJfBOLjAH/4ZxYVFABC+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOWcjOzM3Nye1UABD4SvhL+Ez4TQBI7UTQ0//TP9MAMfpA1NHQ+kDU0dD6QNTR+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEaGQAUc29sIDAuNDkuMAAA",
    code: "te6ccgECGAEAA64ABCSK7VMg4wMgwP/jAiDA/uMC8gsVAgEXAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAcDA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FBQDAiggghAaZIHhu+MCIIIQeb09NrvjAgoEAiggghBotV8/uuMCIIIQeb09NrrjAgYFAlAw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39EB+Gr4a9s8f/hnExECJDD4Qm7jAPhG8nPR+ADbPH/4ZwcRAhbtRNDXScIBio6A4hMIAv5w7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyI+G2AQPQOFwkAFPK91wv/+GJw+GMEUCCCEAyZoFu64wIgghAQa1j9uuMCIIIQFxEIubrjAiCCEBpkgeG64wIQDgwLAnQw+Eby4Ez4Qm7jAPpBldTR0PpA3yDXS8ABAcAAsJPU0dDe1PpBldTR0PpA39FY+GwB+G34a9s8f/hnExEDPDD4RvLgTPhCbuMA03/6QZXU0dD6QN/R2zzbPH/4ZxMNEQBA+AAB+ErIz4WIzgH6AnHPC2oByM+Q/WGD7s7NyYBA+wACtDD4RvLgTPpBldTR0PpA39cNf5XU0dDTf9/6QZXU0dD6QN/XDX+V1NHQ03/f1w1/ldTR0NN/3/pBldTR0PpA39cNf5XU0dDTf9/6QZXU0dD6QN/R2zzjAH/4Zw8RAHr4AAJVAlUDVQRVBVUGyM+FiM4B+gJxzwtqVVDIz5DdDPtCz5Hm9PTazst/y39VIMjOy38ByM7Nzc3JcPsAA4gw+Eby4Ez4Qm7jANHbPCSOKibQ0wH6QDAxyM+HIM5xzwthXjDIz5IyZoFuzlUgyM5ZyM7Mzc3NyXD7AJJfBOLjAH/4ZxMSEQBC+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOWcjOzM3Nye1UABD4SvhL+Ez4TQBI7UTQ0//TP9MAMfpA1NHQ+kDU0dD6QNTR+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEXFgAUc29sIDAuNDkuMAAA",
    codeHash: "c3108ba8fa4670d2b99e530f6df5a032a3d6a6fb3c7118c2ba02534d2f23ab00",
};
export default BroxusTip3AssetOwnerContract;