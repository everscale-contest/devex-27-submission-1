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
    tvc: "te6ccgECGwEABLYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsYBQQaAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA8GA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FxcGAiggghBr1cF0u+MCIIIQbDJ6yrrjAgsHAr4w+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/f+kGV1NHQ+kDf0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBYIAfyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4J28QaKb+YKG1f3L7Am1wyMv/cFiAQPRD+ChxWIBA9BYmcliAQPQWyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYEAgG90+GRUc0Ag+QD4KPpCbxLIz4ZAygcJAbrL/8nQVSBTk8jPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz4NZyM+QgcxMTst/zs3JcfsAJGxyIo4jJNDTAfpAMDHIz4cgznHPC2ECyM+TsMnrKs4ByM7Nzclw+wAKAX6ON/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQLI+ERvFc8LH84ByM7Nzcn4RG8U+wDi4wB/+GcVBFAgghA+nqsXuuMCIIIQTrcfA7rjAiCCEGi1Xz+64wIgghBr1cF0uuMCExIODAKeMPhG8uBM+EJu4wDTH/hEWG91+GTR+ERwb3Jwb3GAQG90+GT4SiGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA69XBdIzxbMyXD7ABYNAXCOMPhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/MyfhEbxT7AOLjAH/4ZxUCJDD4Qm7jAPhG8nPR+ADbPH/4Zw8VAhbtRNDXScIBio6A4hYQAT5w7UTQ9AVxIYBA9A+OgN/4aoBA9A7yvdcL//hicPhjEQECiBoBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAADOtx8DgyM7MyXD7AN5/+GcWAsYw+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWAXJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0CEWFAG4jh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L6eqxezs3JcPsAjjP4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U+wDi4wB/+GcVACL4SvhD+ELIy//LP8+DzMntVAAk7UTQ0//TP9MAMdTR+Gr4Y/hiAAr4RvLgTAIK9KQg9KEaGQAUc29sIDAuNDguMAAA",
    code: "te6ccgECGAEABIkABCSK7VMg4wMgwP/jAiDA/uMC8gsVAgEXAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAwDA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FBQDAiggghBr1cF0u+MCIIIQbDJ6yrrjAggEAr4w+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39cNf5XU0dDTf9/XDX+V1NHQ03/f+kGV1NHQ+kDf0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBMFAfyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4J28QaKb+YKG1f3L7Am1wyMv/cFiAQPRD+ChxWIBA9BYmcliAQPQWyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYEAgG90+GRUc0Ag+QD4KPpCbxLIz4ZAygcGAbrL/8nQVSBTk8jPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz4NZyM+QgcxMTst/zs3JcfsAJGxyIo4jJNDTAfpAMDHIz4cgznHPC2ECyM+TsMnrKs4ByM7Nzclw+wAHAX6ON/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQLI+ERvFc8LH84ByM7Nzcn4RG8U+wDi4wB/+GcSBFAgghA+nqsXuuMCIIIQTrcfA7rjAiCCEGi1Xz+64wIgghBr1cF0uuMCEA8LCQKeMPhG8uBM+EJu4wDTH/hEWG91+GTR+ERwb3Jwb3GAQG90+GT4SiGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA69XBdIzxbMyXD7ABMKAXCOMPhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/MyfhEbxT7AOLjAH/4ZxICJDD4Qm7jAPhG8nPR+ADbPH/4ZwwSAhbtRNDXScIBio6A4hMNAT5w7UTQ9AVxIYBA9A+OgN/4aoBA9A7yvdcL//hicPhjDgECiBcBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAADOtx8DgyM7MyXD7AN5/+GcTAsYw+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWAXJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0CETEQG4jh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L6eqxezs3JcPsAjjP4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U+wDi4wB/+GcSACL4SvhD+ELIy//LP8+DzMntVAAk7UTQ0//TP9MAMdTR+Gr4Y/hiAAr4RvLgTAIK9KQg9KEXFgAUc29sIDAuNDguMAAA",
    codeHash: "92151376a2767a7928d559b608b5349d3c021678dd313603f887d55d09fe234d",
};
export default CrystalAssetRootContract;