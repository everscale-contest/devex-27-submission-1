const CrystalAssetRootContract = {
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
                        "name": "owner",
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
    tvc: "te6ccgECGgEABGwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsXBQQZAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA4GA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FhYGAiggghBr1cF0u+MCIIIQbDJ6yrrjAgoHAvow+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/f+kGV1NHQ+kDf0fgnbxBopv5gobV/cvsCbXDIy/9wWIBA9EP4KHFYgED0FlUDcliAQPQWyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcRUIAeyBAIBvdPhkIVUCWCD5APgo+kJvEsjPhkDKB8v/ydBVIFUEJMjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz4NZyM+QgcxMTst/zs3JcfsAASKOIyTQ0wH6QDAxyM+HIM5xzwthAsjPk7DJ6yrOAcjOzc3JcPsACQF+jjf4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kCyPhEbxXPCx/OAcjOzc3J+ERvFPsA4uMAf/hnFARQIIIQPp6rF7rjAiCCEE63HwO64wIgghBotV8/uuMCIIIQa9XBdLrjAhIRDQsCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eohjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOvVwXSM8WzMlw+wAVDAFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcUAiQw+EJu4wD4RvJz0fgA2zx/+GcOFAIW7UTQ10nCAYqOgOIVDwE+cO1E0PQFcSGAQPQPjoDf+GqAQPQO8r3XC//4YnD4YxABAogZAVAw0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAzrcfA4MjOzMlw+wDef/hnFQLGMPhG8uBM+EJu4wDTH/hEWG91+GT6QZXU0dD6QN/RbXDIy/9wWIBA9EP4KHFYgED0FgFyWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgEBvdPhk+QDIz4oAQMv/ydAhFRMBuI4fI9DTAfpAMDHIz4cgznHPC2EByM+S+nqsXs7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnFAAi+Er4Q/hCyMv/yz/Pg8zJ7VQAJO1E0NP/0z/TADHU0fhq+GP4YgAK+Eby4EwCCvSkIPShGRgAFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECFwEABD8ABCSK7VMg4wMgwP/jAiDA/uMC8gsUAgEWAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAsDA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8ExMDAiggghBr1cF0u+MCIIIQbDJ6yrrjAgcEAvow+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/f+kGV1NHQ+kDf0fgnbxBopv5gobV/cvsCbXDIy/9wWIBA9EP4KHFYgED0FlUDcliAQPQWyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcRIFAeyBAIBvdPhkIVUCWCD5APgo+kJvEsjPhkDKB8v/ydBVIFUEJMjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz4NZyM+QgcxMTst/zs3JcfsAASKOIyTQ0wH6QDAxyM+HIM5xzwthAsjPk7DJ6yrOAcjOzc3JcPsABgF+jjf4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kCyPhEbxXPCx/OAcjOzc3J+ERvFPsA4uMAf/hnEQRQIIIQPp6rF7rjAiCCEE63HwO64wIgghBotV8/uuMCIIIQa9XBdLrjAg8OCggCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eohjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOvVwXSM8WzMlw+wASCQFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcRAiQw+EJu4wD4RvJz0fgA2zx/+GcLEQIW7UTQ10nCAYqOgOISDAE+cO1E0PQFcSGAQPQPjoDf+GqAQPQO8r3XC//4YnD4Yw0BAogWAVAw0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAzrcfA4MjOzMlw+wDef/hnEgLGMPhG8uBM+EJu4wDTH/hEWG91+GT6QZXU0dD6QN/RbXDIy/9wWIBA9EP4KHFYgED0FgFyWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgEBvdPhk+QDIz4oAQMv/ydAhEhABuI4fI9DTAfpAMDHIz4cgznHPC2EByM+S+nqsXs7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnEQAi+Er4Q/hCyMv/yz/Pg8zJ7VQAJO1E0NP/0z/TADHU0fhq+GP4YgAK+Eby4EwCCvSkIPShFhUAFHNvbCAwLjQ5LjAAAA==",
    codeHash: "30aaf3ca0e7b9ee0f784b32f990a73243e5957a93406ddae15615dbe4a86b76e",
};
export default CrystalAssetRootContract;