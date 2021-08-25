const BroxusTip3AssetContract = {
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
                        "name": "walletAddress",
                        "type": "address"
                    },
                    {
                        "name": "deployEmptyWalletGrams",
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
                "name": "setReceiveCallback",
                "inputs": [
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setWallet",
                "inputs": [
                    {
                        "name": "wallet",
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
                "name": "deployWallet",
                "inputs": [
                    {
                        "name": "deployEmptyWalletGrams",
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
                        "name": "tokens",
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
                "name": "tokensReceivedCallback",
                "inputs": [
                    {
                        "name": "token_wallet",
                        "type": "address"
                    },
                    {
                        "name": "token_root",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "sender_public_key",
                        "type": "uint256"
                    },
                    {
                        "name": "sender_address",
                        "type": "address"
                    },
                    {
                        "name": "sender_wallet",
                        "type": "address"
                    },
                    {
                        "name": "original_gas_to",
                        "type": "address"
                    },
                    {
                        "name": "updated_balance",
                        "type": "uint128"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
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
                        "name": "tip3Root",
                        "type": "address"
                    },
                    {
                        "name": "wallet",
                        "type": "address"
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
            },
            {
                "name": "_tip3Root",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_tip3Root",
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
            },
            {
                "key": 3,
                "name": "_tip3Root",
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
                "name": "_tip3Root",
                "type": "address"
            },
            {
                "name": "_wallet",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "5022873b678a1e29eac34e1dde35632ac217e1b6127135e34bee8f0f34a0249c",
};
export default BroxusTip3AssetContract;