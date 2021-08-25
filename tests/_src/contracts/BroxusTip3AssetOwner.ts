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
                        "name": "deployValue",
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
    tvc: "te6ccgECGwEABEsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsYBQQaAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAoGA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FxcGAiggghAaZIHhu+MCIIIQeb09NrvjAg0HAiggghBotV8/uuMCIIIQeb09NrrjAgkIAlAw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39EB+Gr4a9s8f/hnFhQCJDD4Qm7jAPhG8nPR+ADbPH/4ZwoUAhbtRNDXScIBio6A4hYLAv5w7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyI+G2AQPQOGgwAFPK91wv/+GJw+GMEUCCCEAyZoFu64wIgghAQa1j9uuMCIIIQFxEIubrjAiCCEBpkgeG64wITEQ8OAnYw+Eby4Ez4Qm7jAPpBldTR0PpA3yDXS8ABAcAAsJPU0dDe1PpBldTR0PpA39Ei+GwB+G34azDbPH/4ZxYUAzww+Eby4Ez4Qm7jANN/+kGV1NHQ+kDf0ds82zx/+GcWEBQAQPgAAfhKyM+FiM4B+gJxzwtqAcjPkP1hg+7OzcmAQPsAArQw+Eby4Ez6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf0ds84wB/+GcSFAB4+ABUcBJUdnhTzcjPhYjOAfoCcc8LalVQyM+Q3Qz7Qs+R5vT02s7Lf8t/VSDIzst/AcjOzc3NyXD7AF8IA4gw+Eby4Ez4Qm7jANHbPCSOKibQ0wH6QDAxyM+HIM5xzwthXjDIz5IyZoFuzlUgyM5ZyM7Mzc3NyXD7AJJfBOLjAH/4ZxYVFABC+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOWcjOzM3Nye1UAe6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIXwT4SvhL+Ez4TRoASO1E0NP/0z/TADH6QNTR0PpA1NHQ+kDU0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShGhkAFHNvbCAwLjQ4LjAAAA==",
    code: "te6ccgECGAEABB4ABCSK7VMg4wMgwP/jAiDA/uMC8gsVAgEXAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAcDA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FBQDAiggghAaZIHhu+MCIIIQeb09NrvjAgoEAiggghBotV8/uuMCIIIQeb09NrrjAgYFAlAw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39EB+Gr4a9s8f/hnExECJDD4Qm7jAPhG8nPR+ADbPH/4ZwcRAhbtRNDXScIBio6A4hMIAv5w7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyI+G2AQPQOFwkAFPK91wv/+GJw+GMEUCCCEAyZoFu64wIgghAQa1j9uuMCIIIQFxEIubrjAiCCEBpkgeG64wIQDgwLAnYw+Eby4Ez4Qm7jAPpBldTR0PpA3yDXS8ABAcAAsJPU0dDe1PpBldTR0PpA39Ei+GwB+G34azDbPH/4ZxMRAzww+Eby4Ez4Qm7jANN/+kGV1NHQ+kDf0ds82zx/+GcTDREAQPgAAfhKyM+FiM4B+gJxzwtqAcjPkP1hg+7OzcmAQPsAArQw+Eby4Ez6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf0ds84wB/+GcPEQB4+ABUcBJUdnhTzcjPhYjOAfoCcc8LalVQyM+Q3Qz7Qs+R5vT02s7Lf8t/VSDIzst/AcjOzc3NyXD7AF8IA4gw+Eby4Ez4Qm7jANHbPCSOKibQ0wH6QDAxyM+HIM5xzwthXjDIz5IyZoFuzlUgyM5ZyM7Mzc3NyXD7AJJfBOLjAH/4ZxMSEQBC+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOWcjOzM3Nye1UAe6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASIXwT4SvhL+Ez4TRcASO1E0NP/0z/TADH6QNTR0PpA1NHQ+kDU0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShFxYAFHNvbCAwLjQ4LjAAAA==",
    codeHash: "94078ba1aa33f78378cfac51b80778c4f94296b44d2c98e0c3477886bd8a0d87",
};
export default BroxusTip3AssetOwnerContract;