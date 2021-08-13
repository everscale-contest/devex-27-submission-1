const CrystalAssetOwnerContract = {
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
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "root",
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
                "outputs": []
            },
            {
                "name": "onCreate",
                "inputs": [
                    {
                        "name": "asset",
                        "type": "address"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "asset",
                        "type": "address"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            }
        ],
        "data": [],
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
                "name": "_asset",
                "type": "address"
            },
            {
                "name": "_gasReceiver",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECFAEAAp4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsRBQQTAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAsGA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8EBAGBFAgghBcsuAAuuMCIIIQaLVfP7rjAiCCEHlsWVq64wIgghB5vT02uuMCDQoIBwJQMPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/RAfhq+GvbPH/4ZwwOA3gw+Eby4Ez4Qm7jANHbPCKOIyTQ0wH6QDAxyM+HIM5xzwthAsjPk+WxZWrOAcjOzc3JcPsAkVvi4wB/+GcMCQ4ACPhK+EsCJDD4Qm7jAPhG8nPR+ADbPH/4ZwsOAdbtRNDXScIBio5gcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a4BA9A7yvdcL//hicPhj4gwANO1E0NP/0z/TADH6QNTR0PpA0fhr+Gr4Y/hiAlgw+Eby4EzTf/pBldTR0PpA39cNf5XU0dDTf9/6QZXU0dD6QN/R2zzjAH/4Zw8OAC74S/hK+EP4QsjL/8s/z4POAcjOzcntVABi+ABTAfgoXybIz4WIzgH6AnHPC2pVIMjPkPhSaK7Pkeb09NrOy38ByM7Nzclw+wBfBAAK+Eby4EwCCvSkIPShExIAFHNvbCAwLjQ4LjAAAA==",
    code: "te6ccgECEQEAAnEABCSK7VMg4wMgwP/jAiDA/uMC8gsOAgEQAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAgDA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8DQ0DBFAgghBcsuAAuuMCIIIQaLVfP7rjAiCCEHlsWVq64wIgghB5vT02uuMCCgcFBAJQMPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/RAfhq+GvbPH/4ZwkLA3gw+Eby4Ez4Qm7jANHbPCKOIyTQ0wH6QDAxyM+HIM5xzwthAsjPk+WxZWrOAcjOzc3JcPsAkVvi4wB/+GcJBgsACPhK+EsCJDD4Qm7jAPhG8nPR+ADbPH/4ZwgLAdbtRNDXScIBio5gcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a4BA9A7yvdcL//hicPhj4gkANO1E0NP/0z/TADH6QNTR0PpA0fhr+Gr4Y/hiAlgw+Eby4EzTf/pBldTR0PpA39cNf5XU0dDTf9/6QZXU0dD6QN/R2zzjAH/4ZwwLAC74S/hK+EP4QsjL/8s/z4POAcjOzcntVABi+ABTAfgoXybIz4WIzgH6AnHPC2pVIMjPkPhSaK7Pkeb09NrOy38ByM7Nzclw+wBfBAAK+Eby4EwCCvSkIPShEA8AFHNvbCAwLjQ4LjAAAA==",
    codeHash: "f480d2a87fcf57fdbc9c67e35692391b00743784e0ff7be8bfb2d7d9c08c8d74",
};
export default CrystalAssetOwnerContract;