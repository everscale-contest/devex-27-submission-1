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
    tvc: "te6ccgECGgEABFYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsXBQQZAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAsGA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FhYGAiggghBotV8/u+MCIIIQa9XBdLrjAgkHAp4w+Eby4Ez4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADr1cF0jPFszJcPsAFQgBcI4w+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8zJ+ERvFPsA4uMAf/hnFARQIIIQPhSaK7rjAiCCED6eqxe64wIgghBOtx8DuuMCIIIQaLVfP7rjAhEPDgoCJDD4Qm7jAPhG8nPR+ADbPH/4ZwsUAhbtRNDXScIBio6A4hUMAT5w7UTQ9AVxIYBA9A+OgN/4aoBA9A7yvdcL//hicPhjDQECiBkBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAADOtx8DgyM7MyXD7AN5/+GcVAsYw+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWAXJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0CEVEAG4jh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L6eqxezs3JcPsAjjP4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U+wDi4wB/+GcUAv4w+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39cNf5XU0dDTf9/6QZXU0dD6QN/R+CdvEGim/mChtX9y+wJtcMjL/3BYgED0Q/gocViAQPQWI3JYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GBAIBvdPhkXyD5APgoFRIBvPpCbxLIz4ZAygfL/8nQAVNByM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPkNFqvn/JcfsAImxCIo4jJNDTAfpAMDHIz4cgznHPC2ECyM+S+FJors4ByM7Nzclw+wATAX6ON/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQLI+ERvFc8LH84ByM7Nzcn4RG8U+wDi4wB/+GcUACL4SvhD+ELIy//LP8+DzMntVAAk7UTQ0//TP9MAMdTR+Gr4Y/hiAAr4RvLgTAIK9KQg9KEZGAAUc29sIDAuNDguMAAA",
    code: "te6ccgECFwEABCkABCSK7VMg4wMgwP/jAiDA/uMC8gsUAgEWAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAgDA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8ExMDAiggghBotV8/u+MCIIIQa9XBdLrjAgYEAp4w+Eby4Ez4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADr1cF0jPFszJcPsAEgUBcI4w+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8zJ+ERvFPsA4uMAf/hnEQRQIIIQPhSaK7rjAiCCED6eqxe64wIgghBOtx8DuuMCIIIQaLVfP7rjAg4MCwcCJDD4Qm7jAPhG8nPR+ADbPH/4ZwgRAhbtRNDXScIBio6A4hIJAT5w7UTQ9AVxIYBA9A+OgN/4aoBA9A7yvdcL//hicPhjCgECiBYBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAADOtx8DgyM7MyXD7AN5/+GcSAsYw+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWAXJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0CESDQG4jh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L6eqxezs3JcPsAjjP4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U+wDi4wB/+GcRAv4w+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39cNf5XU0dDTf9/6QZXU0dD6QN/R+CdvEGim/mChtX9y+wJtcMjL/3BYgED0Q/gocViAQPQWI3JYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GBAIBvdPhkXyD5APgoEg8BvPpCbxLIz4ZAygfL/8nQAVNByM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPkNFqvn/JcfsAImxCIo4jJNDTAfpAMDHIz4cgznHPC2ECyM+S+FJors4ByM7Nzclw+wAQAX6ON/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQLI+ERvFc8LH84ByM7Nzcn4RG8U+wDi4wB/+GcRACL4SvhD+ELIy//LP8+DzMntVAAk7UTQ0//TP9MAMdTR+Gr4Y/hiAAr4RvLgTAIK9KQg9KEWFQAUc29sIDAuNDguMAAA",
    codeHash: "1954245598cd88dfb2fcdf9caeb428a168689501a019a26493289372d26307dd",
};
export default CrystalAssetRootContract;