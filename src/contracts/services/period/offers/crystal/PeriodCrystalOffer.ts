const PeriodCrystalOfferContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
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
                "outputs": []
            },
            {
                "name": "getDetails",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "asset",
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
                "name": "_root",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_root",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "_owner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ]
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
                "name": "_root",
                "type": "address"
            },
            {
                "key": 2,
                "name": "_owner",
                "type": "address"
            },
            {
                "key": 3,
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
                "name": "_root",
                "type": "address"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_code",
                "type": "cell"
            },
            {
                "name": "_price",
                "type": "uint128"
            },
            {
                "name": "_asset",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECHAEABLwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsZBQQbAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8EQYDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwYGAYCKCCCEEd6XVy74wIgghBr1cF0u+MCCwcCKCCCEE63HwO64wIgghBr1cF0uuMCCggCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Ewhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOvVwXSM8WzMlw+wAXCQFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcPAVAw0ds8+EwhjhuNBHAAAAAAAAAAAAAAAAAzrcfA4MjOzMlw+wDef/hnFwRQIIIQCcBrjrrjAiCCEA/YYKy64wIgghAwD/PJuuMCIIIQR3pdXLrjAhYVDgwCsjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Er4S/hN+E4kjism0NMB+kAwMcjPhyDOcc8LYV4wyM+THel1cs5VIMjOy38ByM7Nzc3JcPsAFw0Bjo4/+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpXjDI+ERvFc8LH85VIMjOy38ByM7Nzc3J+ERvFPsA4uMAf/hnDwOGMPhCbuMA+Ebyc9N/+kGV1NHQ+kDf1w1/ldTR0NN/3/pBldTR0PpA39H4SfhKxwXy4GQBcvsCWPhtAfhu2zzbPH/4ZxEQDwBK+E74TfhM+Ev4SvhD+ELIy//LP8+DzlUwyM7My38ByM7NzcntVABeIPpCbxPXC/+OECDIz4WIzoBvz0DJgQCA+wCOEfhJyM+FiM6Ab89AyYEAgPsA4jACFu1E0NdJwgGKjoDiFxIC5HDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GtzIYBA9A+OgN/4bHD4bRQTAGiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4boBA9A7yvdcL//hicPhjAQKIGwFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI/YYKyDIzs7JcPsA3n/4ZxcBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAACJwGuOgyM7OyXD7AN5/+GcXAFDtRNDT/9M/0wAx+kDU0dD6QNTTf9TR0PpA0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEbGgAUc29sIDAuNDkuMAAA",
    code: "te6ccgECGQEABI8ABCSK7VMg4wMgwP/jAiDA/uMC8gsWAgEYAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8DgMDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwVFQMCKCCCEEd6XVy74wIgghBr1cF0u+MCCAQCKCCCEE63HwO64wIgghBr1cF0uuMCBwUCnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Ewhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOvVwXSM8WzMlw+wAUBgFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcMAVAw0ds8+EwhjhuNBHAAAAAAAAAAAAAAAAAzrcfA4MjOzMlw+wDef/hnFARQIIIQCcBrjrrjAiCCEA/YYKy64wIgghAwD/PJuuMCIIIQR3pdXLrjAhMSCwkCsjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Er4S/hN+E4kjism0NMB+kAwMcjPhyDOcc8LYV4wyM+THel1cs5VIMjOy38ByM7Nzc3JcPsAFAoBjo4/+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpXjDI+ERvFc8LH85VIMjOy38ByM7Nzc3J+ERvFPsA4uMAf/hnDAOGMPhCbuMA+Ebyc9N/+kGV1NHQ+kDf1w1/ldTR0NN/3/pBldTR0PpA39H4SfhKxwXy4GQBcvsCWPhtAfhu2zzbPH/4Zw4NDABK+E74TfhM+Ev4SvhD+ELIy//LP8+DzlUwyM7My38ByM7NzcntVABeIPpCbxPXC/+OECDIz4WIzoBvz0DJgQCA+wCOEfhJyM+FiM6Ab89AyYEAgPsA4jACFu1E0NdJwgGKjoDiFA8C5HDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GtzIYBA9A+OgN/4bHD4bREQAGiNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4boBA9A7yvdcL//hicPhjAQKIGAFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI/YYKyDIzs7JcPsA3n/4ZxQBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAACJwGuOgyM7OyXD7AN5/+GcUAFDtRNDT/9M/0wAx+kDU0dD6QNTTf9TR0PpA0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEYFwAUc29sIDAuNDkuMAAA",
    codeHash: "6f0a6f0eb15bc6586919a2831827a3029ffd93c29f21dd4e07358ecd93000e1a",
};
export default PeriodCrystalOfferContract;