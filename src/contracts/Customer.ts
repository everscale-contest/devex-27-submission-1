const CustomerContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "pubkey",
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
                "name": "_demiurge",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_demiurge",
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
                "name": "_demiurge",
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
                "name": "_demiurge",
                "type": "address"
            },
            {
                "name": "_owner",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECEwEAAnAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsQBwQSAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwELBgEO2zz4R27yfAgDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Dw8IAzwgghAP2GCsuuMCIIIQHlCciLrjAiCCEGi1Xz+64wINDAkCNjD4Qm7jAPhG8nPR+Er4SccF8uBk+ADbPH/4ZwsKAC74S/hK+EP4QsjL/8s/z4POAcjOzcntVAH67UTQ10nCAYqOcnDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GuAQPQO8r3XC//4YnD4Y+IOAVAw0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAnlCciIMjOzslw+wDef/hnDgFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI/YYKyDIzs7JcPsA3n/4Zw4ANO1E0NP/0z/TADH6QNTR0PpA0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KESEQAUc29sIDAuNDguMAAA",
    code: "te6ccgECEAEAAkMABCSK7VMg4wMgwP/jAiDA/uMC8gsNBAEPAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEIAwEO2zz4R27yfAUDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8DAwFAzwgghAP2GCsuuMCIIIQHlCciLrjAiCCEGi1Xz+64wIKCQYCNjD4Qm7jAPhG8nPR+Er4SccF8uBk+ADbPH/4ZwgHAC74S/hK+EP4QsjL/8s/z4POAcjOzcntVAH67UTQ10nCAYqOcnDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GuAQPQO8r3XC//4YnD4Y+ILAVAw0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAnlCciIMjOzslw+wDef/hnCwFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI/YYKyDIzs7JcPsA3n/4ZwsANO1E0NP/0z/TADH6QNTR0PpA0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEPDgAUc29sIDAuNDguMAAA",
    codeHash: "a506437c8fd347d3e2ff74380b8e6be60a9b00c43d5fa80472e6c2f48e146558",
};
export default CustomerContract;