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
                "name": "transfer",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "internalTransfer",
                "inputs": [
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "withdraw",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "withdrawAll",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
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
    tvc: "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",
    code: "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",
    codeHash: "c450154a5aad7a9a22151f18345b4343860032f9f960bdabd179e8506860332b",
};
export default CrystalAssetContract;