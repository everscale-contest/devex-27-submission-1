const PeriodSubscriptionContract = {
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
            },
            {
                "name": "_periods",
                "type": "uint32"
            },
            {
                "name": "_expireAt",
                "type": "uint32"
            }
        ]
    },
    tvc: "te6ccgECEwEAArMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsQBQQSAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CgYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Dw8GAzwgghAJwGuOuuMCIIIQD9hgrLrjAiCCECBzExO64wINDAcDVDD4Qm7jAPhG8nPTf/pBldTR0PpA39H4SfhKxwXy4GQBcvsC2zzbPH/4ZwoJCABA+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOyx/LH83J7VQAXiD6Qm8T1wv/jhAgyM+FiM6Ab89AyYEAgPsAjhH4ScjPhYjOgG/PQMmBAID7AOIwAhDtRNDXScIBig4LAPaOeHDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+Gtw+Gxw+G2AQPQO8r3XC//4YnD4Y+IBUDDR2zz4SyGOG40EcAAAAAAAAAAAAAAAACP2GCsgyM7OyXD7AN5/+GcOAVAw0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAicBrjoMjOzslw+wDef/hnDgBE7UTQ0//TP9MAMfpA1NHQ+kDTH9Mf0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShEhEAFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECEAEAAoYABCSK7VMg4wMgwP/jAiDA/uMC8gsNAgEPAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8BwMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8DAwDAzwgghAJwGuOuuMCIIIQD9hgrLrjAiCCECBzExO64wIKCQQDVDD4Qm7jAPhG8nPTf/pBldTR0PpA39H4SfhKxwXy4GQBcvsC2zzbPH/4ZwcGBQBA+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOyx/LH83J7VQAXiD6Qm8T1wv/jhAgyM+FiM6Ab89AyYEAgPsAjhH4ScjPhYjOgG/PQMmBAID7AOIwAhDtRNDXScIBigsIAPaOeHDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+Gtw+Gxw+G2AQPQO8r3XC//4YnD4Y+IBUDDR2zz4SyGOG40EcAAAAAAAAAAAAAAAACP2GCsgyM7OyXD7AN5/+GcLAVAw0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAicBrjoMjOzslw+wDef/hnCwBE7UTQ0//TP9MAMfpA1NHQ+kDTH9Mf0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShDw4AFHNvbCAwLjQ5LjAAAA==",
    codeHash: "43885e10ddf8e7a251814030098293999b898481cfd1cf05a5354292fb7aa4cd",
};
export default PeriodSubscriptionContract;