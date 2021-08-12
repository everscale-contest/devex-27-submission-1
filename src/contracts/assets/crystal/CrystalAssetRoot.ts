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
                        "name": "deployValue",
                        "type": "uint128"
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
    tvc: "te6ccgECGgEABEQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsXBQQZAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA4GA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FhYGAiggghBruA1fu+MCIIIQa9XBdLrjAgkHAp4w+Eby4Ez4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADr1cF0jPFszJcPsAFQgBcI4w+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8zJ+ERvFPsA4uMAf/hnFARQIIIQPp6rF7rjAiCCEE63HwO64wIgghBotV8/uuMCIIIQa7gNX7rjAhIRDQoC/DD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf1w1/ldTR0NN/39H4J28QaKb+YKG1f3L7Am1wyMv/cFiAQPRD+ChxWIBA9BYicliAQPQWyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYEAgG90+GRfIPkA+Cj6Qm8SyM+GQBULAaLKB8v/ydABUzHIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+Q0Wq+f8lx+wBsMSGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk67gNX7Ozclw+wAMAXaOM/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQHI+ERvFc8LH87NyfhEbxT7AOLjAH/4ZxQCJDD4Qm7jAPhG8nPR+ADbPH/4Zw4UAhbtRNDXScIBio6A4hUPAT5w7UTQ9AVxIYBA9A+OgN/4aoBA9A7yvdcL//hicPhjEAECiBkBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAADOtx8DgyM7MyXD7AN5/+GcVAsYw+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWAXJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0CEVEwG4jh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L6eqxezs3JcPsAjjP4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U+wDi4wB/+GcUACL4SvhD+ELIy//LP8+DzMntVAAk7UTQ0//TP9MAMdTR+Gr4Y/hiAAr4RvLgTAIK9KQg9KEZGAAUc29sIDAuNDguMAAA",
    code: "te6ccgECFwEABBcABCSK7VMg4wMgwP/jAiDA/uMC8gsUAgEWAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAsDA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8ExMDAiggghBruA1fu+MCIIIQa9XBdLrjAgYEAp4w+Eby4Ez4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADr1cF0jPFszJcPsAEgUBcI4w+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8zJ+ERvFPsA4uMAf/hnEQRQIIIQPp6rF7rjAiCCEE63HwO64wIgghBotV8/uuMCIIIQa7gNX7rjAg8OCgcC/DD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf1w1/ldTR0NN/39H4J28QaKb+YKG1f3L7Am1wyMv/cFiAQPRD+ChxWIBA9BYicliAQPQWyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYEAgG90+GRfIPkA+Cj6Qm8SyM+GQBIIAaLKB8v/ydABUzHIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+Q0Wq+f8lx+wBsMSGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk67gNX7Ozclw+wAJAXaOM/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQHI+ERvFc8LH87NyfhEbxT7AOLjAH/4ZxECJDD4Qm7jAPhG8nPR+ADbPH/4ZwsRAhbtRNDXScIBio6A4hIMAT5w7UTQ9AVxIYBA9A+OgN/4aoBA9A7yvdcL//hicPhjDQECiBYBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAADOtx8DgyM7MyXD7AN5/+GcSAsYw+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWAXJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0CESEAG4jh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L6eqxezs3JcPsAjjP4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U+wDi4wB/+GcRACL4SvhD+ELIy//LP8+DzMntVAAk7UTQ0//TP9MAMdTR+Gr4Y/hiAAr4RvLgTAIK9KQg9KEWFQAUc29sIDAuNDguMAAA",
    codeHash: "6eaf1061966f40a41f374eec5b18ef19ce8e0bf48354c7b25646c1dc74956d0b",
};
export default CrystalAssetRootContract;