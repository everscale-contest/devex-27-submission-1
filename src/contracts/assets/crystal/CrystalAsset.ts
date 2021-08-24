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
    codeHash: "df93cd4839ba3e8d0a668baf02d6fa2ebe3b41213dadffbcaf760cee8c4dd44a",
};
export default CrystalAssetContract;