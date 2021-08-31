const PeriodCrystalOfferRootContract = {
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
                        "name": "deploymentValue",
                        "type": "uint128"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "asset",
                        "type": "address"
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
                        "name": "subscription",
                        "type": "address"
                    },
                    {
                        "name": "receiver",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getOfferCode",
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
                "name": "getOfferAddress",
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
                "name": "_offerCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_offerCode",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "_accepterCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_accepterCode",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_offerCode",
                "type": "cell"
            },
            {
                "key": 2,
                "name": "_accepterCode",
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
                "name": "_offerCode",
                "type": "cell"
            },
            {
                "name": "_accepterCode",
                "type": "cell"
            }
        ]
    },
    tvc: "te6ccgECHQEABQQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsaBQQcAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CQYDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwZGQYCKCCCEEtL46m74wIgghBotV8/u+MCDgcCKCCCEEzuzgi64wIgghBotV8/uuMCDAgCJDD4Qm7jAPhG8nPR+ADbPH/4ZwkWAhbtRNDXScIBio6A4hgKAlRw7UTQ9AVxIYBA9A+OgN/4anIhgED0D46A3/hrgED0DvK91wv/+GJw+GMLCwECiBwCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eohjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMzuzgiM8WzMlw+wAYDQFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcWBFAgghAJIiRXuuMCIIIQHbjzLLrjAiCCEDLSJDS64wIgghBLS+OpuuMCExIQDwFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAMtL46mDIzszJcPsA3n/4ZxgC2jD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf0W1wyMv/cFiAQPRD+ChxWIBA9Bb4SXJYgED0FvhLc1iAQPQXyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYBAb3T4ZPkAyM+KAEDL/8nQMSEYEQG4jh8j0NMB+kAwMcjPhyDOcc8LYQHIz5LLSJDSzs3JcPsAjjP4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U+wDi4wB/+GcWAVAw0ds8+EshjhuNBHAAAAAAAAAAAAAAAAAnbjzLIMjOzMlw+wDef/hnGAP+MPhG8uBM+EJu4wDTH/hEWG91+GTTf9N/+kGV1NHQ+kDf1w1/ldTR0NN/3/pBldTR0PpA39HbPG1wyMv/cFiAQPRD+ChxWIBA9Bb4SXJYgED0FvhLc1iAQPQXyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYEAgG90+GQhVQJVAxgXFAHsVQRVAyD5APgo+kJvEsjPhkDKB8v/ydBVQFUGJsjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz4NVMMjPkMA/zybLf87LfwHIzs3NyXH7AAEijiMk0NMB+kAwMcjPhyDOcc8LYQLIz5IkiJFezgHIzs3NyXD7ABUBfo43+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAsj4RG8VzwsfzgHIzs3NyfhEbxT7AOLjAH/4ZxYAKPhL+Er4Q/hCyMv/yz/Pg8zMye1UABz4J28QaKb+YKG1f3L7AgAq7UTQ0//TP9MAMdTU0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEcGwAUc29sIDAuNDkuMAAA",
    code: "te6ccgECGgEABNcABCSK7VMg4wMgwP/jAiDA/uMC8gsXAgEZAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8BgMDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwWFgMCKCCCEEtL46m74wIgghBotV8/u+MCCwQCKCCCEEzuzgi64wIgghBotV8/uuMCCQUCJDD4Qm7jAPhG8nPR+ADbPH/4ZwYTAhbtRNDXScIBio6A4hUHAlRw7UTQ9AVxIYBA9A+OgN/4anIhgED0D46A3/hrgED0DvK91wv/+GJw+GMICAECiBkCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eohjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMzuzgiM8WzMlw+wAVCgFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcTBFAgghAJIiRXuuMCIIIQHbjzLLrjAiCCEDLSJDS64wIgghBLS+OpuuMCEA8NDAFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAMtL46mDIzszJcPsA3n/4ZxUC2jD4RvLgTPhCbuMA0x/4RFhvdfhk+kGV1NHQ+kDf0W1wyMv/cFiAQPRD+ChxWIBA9Bb4SXJYgED0FvhLc1iAQPQXyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYBAb3T4ZPkAyM+KAEDL/8nQMSEVDgG4jh8j0NMB+kAwMcjPhyDOcc8LYQHIz5LLSJDSzs3JcPsAjjP4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U+wDi4wB/+GcTAVAw0ds8+EshjhuNBHAAAAAAAAAAAAAAAAAnbjzLIMjOzMlw+wDef/hnFQP+MPhG8uBM+EJu4wDTH/hEWG91+GTTf9N/+kGV1NHQ+kDf1w1/ldTR0NN/3/pBldTR0PpA39HbPG1wyMv/cFiAQPRD+ChxWIBA9Bb4SXJYgED0FvhLc1iAQPQXyPQAyfhKyM+EgPQA9ADPgcn4RHBvcnBvcYEAgG90+GQhVQJVAxUUEQHsVQRVAyD5APgo+kJvEsjPhkDKB8v/ydBVQFUGJsjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz4NVMMjPkMA/zybLf87LfwHIzs3NyXH7AAEijiMk0NMB+kAwMcjPhyDOcc8LYQLIz5IkiJFezgHIzs3NyXD7ABIBfo43+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAsj4RG8VzwsfzgHIzs3NyfhEbxT7AOLjAH/4ZxMAKPhL+Er4Q/hCyMv/yz/Pg8zMye1UABz4J28QaKb+YKG1f3L7AgAq7UTQ0//TP9MAMdTU0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEZGAAUc29sIDAuNDkuMAAA",
    codeHash: "262d8b47db9073f5902351cd718f991861f5b2a8a908d63438680f8a0225e1f6",
};
export default PeriodCrystalOfferRootContract;