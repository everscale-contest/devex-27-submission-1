const CrystalAssetContract = {
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
                "inputs": [],
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
                        "name": "balance",
                        "type": "uint128"
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
            }
        ]
    },
    tvc: "te6ccgECEwEAAwQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsQBQQSAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CAYDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwPDwYEUCCCEAnAa4664wIgghAKXoIduuMCIIIQD9hgrLrjAiCCEGi1Xz+64wINCgkHAjIw+EJu4wD4RvJz0fhK+EnHBfLgZNs8f/hnCAwB+u1E0NdJwgGKjnJw7UTQ9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hrgED0DvK91wv/+GJw+GPiDgFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI/YYKyDIzs7JcPsA3n/4Zw4CjDD4RvLgTPhCbuMA0x/4RFhvdfhk0fhK+Ev4J28QI44mJdDTAfpAMDHIz4cgznHPC2FeIMjPkil6CHbOWcjOy3/Nzclw+wAOCwGEjjr4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2leIMj4RG8VzwsfzlnIzst/zc3J+ERvFPsA4uMAf/hnDAAu+Ev4SvhD+ELIy//LP8+DzgHIzs3J7VQBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAACJwGuOgyM7OyXD7AN5/+GcOADTtRNDT/9M/0wAx+kDU0dD6QNH4a/hq+GP4YgAK+Eby4EwCCvSkIPShEhEAFHNvbCAwLjQ4LjAAAA==",
    code: "te6ccgECEAEAAtcABCSK7VMg4wMgwP/jAiDA/uMC8gsNAgEPAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8BQMDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwMDAMEUCCCEAnAa4664wIgghAKXoIduuMCIIIQD9hgrLrjAiCCEGi1Xz+64wIKBwYEAjIw+EJu4wD4RvJz0fhK+EnHBfLgZNs8f/hnBQkB+u1E0NdJwgGKjnJw7UTQ9AVxIYBA9A6OJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4anIhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hrgED0DvK91wv/+GJw+GPiCwFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI/YYKyDIzs7JcPsA3n/4ZwsCjDD4RvLgTPhCbuMA0x/4RFhvdfhk0fhK+Ev4J28QI44mJdDTAfpAMDHIz4cgznHPC2FeIMjPkil6CHbOWcjOy3/Nzclw+wALCAGEjjr4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2leIMj4RG8VzwsfzlnIzst/zc3J+ERvFPsA4uMAf/hnCQAu+Ev4SvhD+ELIy//LP8+DzgHIzs3J7VQBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAACJwGuOgyM7OyXD7AN5/+GcLADTtRNDT/9M/0wAx+kDU0dD6QNH4a/hq+GP4YgAK+Eby4EwCCvSkIPShDw4AFHNvbCAwLjQ4LjAAAA==",
    codeHash: "6361aff4ac6cc0c73ec000c135c8fd8a783affcf6d4e1c829c727faf2c9dd7d0",
};
export default CrystalAssetContract;