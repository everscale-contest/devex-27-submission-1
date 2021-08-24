const BroxusTip3AssetRootContract = {
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
                        "name": "answerId",
                        "type": "uint32"
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
                "outputs": [
                    {
                        "name": "asset",
                        "type": "address"
                    },
                    {
                        "name": "receiver",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getCode",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "getAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "tip3Root",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "_code",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_code",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_code",
                "type": "cell"
            }
        ],
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
                "name": "_code",
                "type": "cell"
            }
        ]
    },
    tvc: "te6ccgECGwEABREAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsYBQQaAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CwYDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwXFwYCKCCCEGi1Xz+74wIgghBr1cF0uuMCCQcCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eohjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOvVwXSM8WzMlw+wAWCAFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcVBFAgghAVRX/wuuMCIIIQN0M+0LrjAiCCEE63HwO64wIgghBotV8/uuMCEw8OCgIkMPhCbuMA+Ebyc9H4ANs8f/hnCxUCFu1E0NdJwgGKjoDiFgwBPnDtRND0BXEhgED0D46A3/hqgED0DvK91wv/+GJw+GMNAQKIGgFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAM63HwODIzszJcPsA3n/4ZxYC5DD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBYQAfyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4J28QaKb+YKG1f3L7Am1wyMv/cFiAQPRD+ChxWIBA9Bb4SXJYgED0FihzWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgQCAb3T4ZFRzRVR5M/kA+CgRAdz6Qm8SyM+GQMoHy//J0FVAU9XIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+DVTDIz5DAP88my3/Oy38ByM7Nzclx+wAkbJIijiMk0NMB+kAwMcjPhyDOcc8LYQLIz5LdDPtCzgHIzs3NyXD7ABIBfo43+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAsj4RG8VzwsfzgHIzs3NyfhEbxT7AOLjAH/4ZxUC6DD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf+kGV1NHQ+kDf0W1wyMv/cFiAQPRD+ChxWIBA9BYicliAQPQWAXNYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0DEhFhQBuI4fI9DTAfpAMDHIz4cgznHPC2EByM+SVRX/ws7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnFQAi+Er4Q/hCyMv/yz/Pg8zJ7VQAJO1E0NP/0z/TADHU0fhq+GP4YgAK+Eby4EwCCvSkIPShGhkAFHNvbCAwLjQ4LjAAAA==",
    code: "te6ccgECGAEABOQABCSK7VMg4wMgwP/jAiDA/uMC8gsVAgEXAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CAMDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwUFAMCKCCCEGi1Xz+74wIgghBr1cF0uuMCBgQCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eohjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOvVwXSM8WzMlw+wATBQFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcSBFAgghAVRX/wuuMCIIIQN0M+0LrjAiCCEE63HwO64wIgghBotV8/uuMCEAwLBwIkMPhCbuMA+Ebyc9H4ANs8f/hnCBICFu1E0NdJwgGKjoDiEwkBPnDtRND0BXEhgED0D46A3/hqgED0DvK91wv/+GJw+GMKAQKIFwFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAM63HwODIzszJcPsA3n/4ZxMC5DD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBMNAfyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4J28QaKb+YKG1f3L7Am1wyMv/cFiAQPRD+ChxWIBA9Bb4SXJYgED0FihzWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgQCAb3T4ZFRzRVR5M/kA+CgOAdz6Qm8SyM+GQMoHy//J0FVAU9XIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+DVTDIz5DAP88my3/Oy38ByM7Nzclx+wAkbJIijiMk0NMB+kAwMcjPhyDOcc8LYQLIz5LdDPtCzgHIzs3NyXD7AA8Bfo43+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAsj4RG8VzwsfzgHIzs3NyfhEbxT7AOLjAH/4ZxIC6DD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf+kGV1NHQ+kDf0W1wyMv/cFiAQPRD+ChxWIBA9BYicliAQPQWAXNYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0DEhExEBuI4fI9DTAfpAMDHIz4cgznHPC2EByM+SVRX/ws7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnEgAi+Er4Q/hCyMv/yz/Pg8zJ7VQAJO1E0NP/0z/TADHU0fhq+GP4YgAK+Eby4EwCCvSkIPShFxYAFHNvbCAwLjQ4LjAAAA==",
    codeHash: "adc4e3fed12e8512ef24ae93d6b2e622272624903ecd6bb07b36b73ce8936bdb",
};
export default BroxusTip3AssetRootContract;