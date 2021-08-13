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
    tvc: "te6ccgECEwEAAwYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsQBQQSAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CAYDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwPDwYEUCCCEAnAa4664wIgghAKXoIduuMCIIIQD9hgrLrjAiCCEGi1Xz+64wINCgkHAjYw+EJu4wD4RvJz0fhK+EnHBfLgZPgA2zx/+GcIDAH67UTQ10nCAYqOcnDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GuAQPQO8r3XC//4YnD4Y+IOAVAw0ds8+EshjhuNBHAAAAAAAAAAAAAAAAAj9hgrIMjOzslw+wDef/hnDgKMMPhG8uBM+EJu4wDTH/hEWG91+GTR+Er4S/gnbxAjjiYl0NMB+kAwMcjPhyDOcc8LYV4gyM+SKXoIds5ZyM7Lf83NyXD7AA4LAYSOOvhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaV4gyPhEbxXPCx/OWcjOy3/Nzcn4RG8U+wDi4wB/+GcMAC74S/hK+EP4QsjL/8s/z4POAcjOzcntVAFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAInAa46DIzs7JcPsA3n/4Zw4ANO1E0NP/0z/TADH6QNTR0PpA0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KESEQAUc29sIDAuNDguMAAA",
    code: "te6ccgECEAEAAtkABCSK7VMg4wMgwP/jAiDA/uMC8gsNAgEPAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8BQMDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwMDAMEUCCCEAnAa4664wIgghAKXoIduuMCIIIQD9hgrLrjAiCCEGi1Xz+64wIKBwYEAjYw+EJu4wD4RvJz0fhK+EnHBfLgZPgA2zx/+GcFCQH67UTQ10nCAYqOcnDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GuAQPQO8r3XC//4YnD4Y+ILAVAw0ds8+EshjhuNBHAAAAAAAAAAAAAAAAAj9hgrIMjOzslw+wDef/hnCwKMMPhG8uBM+EJu4wDTH/hEWG91+GTR+Er4S/gnbxAjjiYl0NMB+kAwMcjPhyDOcc8LYV4gyM+SKXoIds5ZyM7Lf83NyXD7AAsIAYSOOvhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaV4gyPhEbxXPCx/OWcjOy3/Nzcn4RG8U+wDi4wB/+GcJAC74S/hK+EP4QsjL/8s/z4POAcjOzcntVAFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAInAa46DIzs7JcPsA3n/4ZwsANO1E0NP/0z/TADH6QNTR0PpA0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEPDgAUc29sIDAuNDguMAAA",
    codeHash: "47c2d661f701f420c0b94d6b2225e44426f2f2ccda4fa5511833ad12fc2e3550",
};
export default CrystalAssetContract;