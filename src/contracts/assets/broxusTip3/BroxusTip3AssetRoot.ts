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
    tvc: "te6ccgECGgEABMkAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsXBQQZAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CwYDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwWFgYCKCCCEGi1Xz+74wIgghBr1cF0uuMCCQcCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eohjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOvVwXSM8WzMlw+wAVCAFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcUBFAgghAVRX/wuuMCIIIQN0M+0LrjAiCCEE63HwO64wIgghBotV8/uuMCEg8OCgIkMPhCbuMA+Ebyc9H4ANs8f/hnCxQCFu1E0NdJwgGKjoDiFQwBPnDtRND0BXEhgED0D46A3/hqgED0DvK91wv/+GJw+GMNAQKIGQFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAM63HwODIzszJcPsA3n/4ZxUC/jD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf0fgnbxBopv5gobV/cvsCbXDIy/9wWIBA9EP4KHFYgED0FvhJcliAQPQWVQVzWIBA9BYVEAHsyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYEAgG90+GQhVQJVA1UEVQMg+QD4KPpCbxLIz4ZAygfL/8nQVUBVBibIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+DVTDIz5DAP88my3/Oy38ByM7Nzclx+wABIhEByI4jJNDTAfpAMDHIz4cgznHPC2ECyM+S3Qz7Qs4ByM7Nzclw+wCON/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQLI+ERvFc8LH84ByM7Nzcn4RG8U+wDi4wB/+GcUAuYw+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA3/pBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWWHJYgED0FgFzWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgEBvdPhk+QDIz4oAQMv/ydAhFRMBuI4fI9DTAfpAMDHIz4cgznHPC2EByM+SVRX/ws7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnFAAi+Er4Q/hCyMv/yz/Pg8zJ7VQAJO1E0NP/0z/TADHU0fhq+GP4YgAK+Eby4EwCCvSkIPShGRgAFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECFwEABJwABCSK7VMg4wMgwP/jAiDA/uMC8gsUAgEWAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CAMDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwTEwMCKCCCEGi1Xz+74wIgghBr1cF0uuMCBgQCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eohjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOvVwXSM8WzMlw+wASBQFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcRBFAgghAVRX/wuuMCIIIQN0M+0LrjAiCCEE63HwO64wIgghBotV8/uuMCDwwLBwIkMPhCbuMA+Ebyc9H4ANs8f/hnCBECFu1E0NdJwgGKjoDiEgkBPnDtRND0BXEhgED0D46A3/hqgED0DvK91wv/+GJw+GMKAQKIFgFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAM63HwODIzszJcPsA3n/4ZxIC/jD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf1w1/ldTR0NN/39cNf5XU0dDTf9/6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf0fgnbxBopv5gobV/cvsCbXDIy/9wWIBA9EP4KHFYgED0FvhJcliAQPQWVQVzWIBA9BYSDQHsyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYEAgG90+GQhVQJVA1UEVQMg+QD4KPpCbxLIz4ZAygfL/8nQVUBVBibIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+DVTDIz5DAP88my3/Oy38ByM7Nzclx+wABIg4ByI4jJNDTAfpAMDHIz4cgznHPC2ECyM+S3Qz7Qs4ByM7Nzclw+wCON/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQLI+ERvFc8LH84ByM7Nzcn4RG8U+wDi4wB/+GcRAuYw+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA3/pBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWWHJYgED0FgFzWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgEBvdPhk+QDIz4oAQMv/ydAhEhABuI4fI9DTAfpAMDHIz4cgznHPC2EByM+SVRX/ws7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnEQAi+Er4Q/hCyMv/yz/Pg8zJ7VQAJO1E0NP/0z/TADHU0fhq+GP4YgAK+Eby4EwCCvSkIPShFhUAFHNvbCAwLjQ5LjAAAA==",
    codeHash: "e04619068f24dcc35930081958fd3d808584380837b2bab1dfd14f31376b6c7d",
};
export default BroxusTip3AssetRootContract;