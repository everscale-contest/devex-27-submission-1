const CrystalStorageRootContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "deployValue",
                        "type": "uint128"
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
                "name": "getCode",
                "inputs": [
                    {
                        "name": "_answer_id",
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
                        "name": "_answer_id",
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
        "events": []
    },
    tvc: "te6ccgECGQEABCMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsWBQQYAogh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA4GAWoi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDcIdcNH/K8Id0B2zz4R27yfAYCKCCCEGu4DV+74wIgghBr1cF0uuMCCQcD/jD4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADr1cF0jPFszJcPsAjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wAVFAgABn/4ZwRQIIIQPp6rF7rjAiCCEE63HwO64wIgghBotV8/uuMCIIIQa7gNX7rjAhIRDQoC/jD4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39cNf5XU0dDTf9/R+CdvEGim/mChtX9y+wJtcMjL/3BYgED0Q/gocViAQPQWInJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GBAIBvdPhkXyD5APgo+kJvEsjPhkDKB8v/ydAVCwGYAVMxyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPkNFqvn/JcfsAMWwhIY4fI9DTAfpAMDHIz4cgznHPC2EByM+TruA1fs7NyXD7AAwBdo4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnFAIqMPhCbuMA+Ebyc3/4ZtH4ANs8f/hnDhQCFu1E0NdJwgGKjoDiFQ8BRHDtRND0BXEhgED0D46A3/hqgED0DvK91wv/+GJw+GNw+GYQAQKIGAFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAM63HwODIzszJcPsA3n/4ZxUCvjD4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWIXJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0DEhFRMBuI4fI9DTAfpAMDHIz4cgznHPC2EByM+S+nqsXs7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnFAAm+Er4RvhD+ELIy//LP8oAzMntVAAm7UTQ0//TP9IA1NH4avhm+GP4YgIK9KQg9KEYFwAUc29sIDAuNDcuMAAA",
    code: "te6ccgECFgEAA/YABCSK7VMg4wMgwP/jAiDA/uMC8gsTAgEVAogh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAsDAWoi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDcIdcNH/K8Id0B2zz4R27yfAMCKCCCEGu4DV+74wIgghBr1cF0uuMCBgQD/jD4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADr1cF0jPFszJcPsAjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wASEQUABn/4ZwRQIIIQPp6rF7rjAiCCEE63HwO64wIgghBotV8/uuMCIIIQa7gNX7rjAg8OCgcC/jD4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39cNf5XU0dDTf9/R+CdvEGim/mChtX9y+wJtcMjL/3BYgED0Q/gocViAQPQWInJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GBAIBvdPhkXyD5APgo+kJvEsjPhkDKB8v/ydASCAGYAVMxyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPkNFqvn/JcfsAMWwhIY4fI9DTAfpAMDHIz4cgznHPC2EByM+TruA1fs7NyXD7AAkBdo4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnEQIqMPhCbuMA+Ebyc3/4ZtH4ANs8f/hnCxECFu1E0NdJwgGKjoDiEgwBRHDtRND0BXEhgED0D46A3/hqgED0DvK91wv/+GJw+GNw+GYNAQKIFQFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAM63HwODIzszJcPsA3n/4ZxICvjD4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQWIXJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0DEhEhABuI4fI9DTAfpAMDHIz4cgznHPC2EByM+S+nqsXs7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnEQAm+Er4RvhD+ELIy//LP8oAzMntVAAm7UTQ0//TP9IA1NH4avhm+GP4YgIK9KQg9KEVFAAUc29sIDAuNDcuMAAA",
    codeHash: "5c7cf30cb618dd77929fdb2608d92d18a7e7a020faae57d78fc85e2d094a2495",
};
export default CrystalStorageRootContract;