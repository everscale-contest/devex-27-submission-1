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
                "inputs": [
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
    tvc: "te6ccgECFAEAArsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsRBwQTAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEMBgEO2zz4R27yfAgDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8EBAIAzwgghAP2GCsuuMCIIIQHlCciLrjAiCCECBzExO64wIODQkDaDD4Qm7jAPhG8nPXDX+V1NHQ03/f+kGV1NHQ+kDf0fhK+EnHBfLgZCFy+wIg2zxb2zx/+GcMCwoALvhL+Er4Q/hCyMv/yz/Pg84ByM7Nye1UAF4g+kJvE9cL/44QIMjPhYjOgG/PQMmBAID7AI4R+EnIz4WIzoBvz0DJgQCA+wDiMAH67UTQ10nCAYqOcnDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GuAQPQO8r3XC//4YnD4Y+IPAVAw0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAnlCciIMjOzslw+wDef/hnDwFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI/YYKyDIzs7JcPsA3n/4Zw8ANO1E0NP/0z/TADH6QNTR0PpA0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KETEgAUc29sIDAuNDguMAAA",
    code: "te6ccgECEQEAAo4ABCSK7VMg4wMgwP/jAiDA/uMC8gsOBAEQAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEJAwEO2zz4R27yfAUDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8DQ0FAzwgghAP2GCsuuMCIIIQHlCciLrjAiCCECBzExO64wILCgYDaDD4Qm7jAPhG8nPXDX+V1NHQ03/f+kGV1NHQ+kDf0fhK+EnHBfLgZCFy+wIg2zxb2zx/+GcJCAcALvhL+Er4Q/hCyMv/yz/Pg84ByM7Nye1UAF4g+kJvE9cL/44QIMjPhYjOgG/PQMmBAID7AI4R+EnIz4WIzoBvz0DJgQCA+wDiMAH67UTQ10nCAYqOcnDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GuAQPQO8r3XC//4YnD4Y+IMAVAw0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAnlCciIMjOzslw+wDef/hnDAFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI/YYKyDIzs7JcPsA3n/4ZwwANO1E0NP/0z/TADH6QNTR0PpA0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEQDwAUc29sIDAuNDguMAAA",
    codeHash: "30a00c13634977b727363c4f4252cd92faeb09ed470c2de7e58552b9fc360c0d",
};
export default CustomerContract;