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
                    }
                ],
                "outputs": []
            },
            {
                "name": "onCreate",
                "inputs": [
                    {
                        "name": "assetAddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getAssetAddress",
                "inputs": [],
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
                "name": "_assetAddress",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECFAEAAkcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsRBQQTAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAoGA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8EBAGBFAgghAbkzoLuuMCIIIQZiDbBLrjAiCCEGi1Xz+64wIgghBwoGHruuMCDQsJBwNwMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5PCgYeuzs3JcPsAkTDi4wB/+GcMCA4ABPhKAiQw+EJu4wD4RvJz0fgA2zx/+GcKDgGK7UTQ10nCAYqOOnDtRND0BY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhqgED0DvK91wv/+GJw+GPiDAI4MPhG8uBM+EJu4wD6QZXU0dD6QN/R+GrbPH/4ZwwOACbtRNDT/9M/0wAx+kDR+Gr4Y/hiAkYw+Eby4EzTf/pBldTR0PpA39cNf5XU0dDTf9/R2zzjAH/4Zw8OACL4SvhD+ELIy//LP8+DzsntVABQ+AD4KF3Iz4WIzgH6AnHPC2pZyM+RruA1fs+RmINsEs7Lf83JcPsAWwAK+Eby4EwCCvSkIPShExIAFHNvbCAwLjQ4LjAAAA==",
    code: "te6ccgECEQEAAhoABCSK7VMg4wMgwP/jAiDA/uMC8gsOAgEQAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAcDA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8DQ0DBFAgghAbkzoLuuMCIIIQZiDbBLrjAiCCEGi1Xz+64wIgghBwoGHruuMCCggGBANwMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5PCgYeuzs3JcPsAkTDi4wB/+GcJBQsABPhKAiQw+EJu4wD4RvJz0fgA2zx/+GcHCwGK7UTQ10nCAYqOOnDtRND0BY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhqgED0DvK91wv/+GJw+GPiCQI4MPhG8uBM+EJu4wD6QZXU0dD6QN/R+GrbPH/4ZwkLACbtRNDT/9M/0wAx+kDR+Gr4Y/hiAkYw+Eby4EzTf/pBldTR0PpA39cNf5XU0dDTf9/R2zzjAH/4ZwwLACL4SvhD+ELIy//LP8+DzsntVABQ+AD4KF3Iz4WIzgH6AnHPC2pZyM+RruA1fs+RmINsEs7Lf83JcPsAWwAK+Eby4EwCCvSkIPShEA8AFHNvbCAwLjQ4LjAAAA==",
    codeHash: "ac1dd9f6ede1c7c649ce581dcb14411bc941ec96db4febce8886312e39efd880",
};
export default CrystalAssetOwnerContract;