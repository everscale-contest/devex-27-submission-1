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
    codeHash: "b362f1fd5e545b44b766e586e49cb8a838d30e470dfa058c782fa1d223ef335a",
};
export default CrystalAssetContract;