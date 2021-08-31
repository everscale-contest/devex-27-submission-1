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
                "name": "createAsset",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    },
                    {
                        "name": "timeout",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createSubscription",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    },
                    {
                        "name": "timeout",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "clearAssetRoots",
                "inputs": [
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "clearSubscriptionRoots",
                "inputs": [
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addAsset",
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
                "name": "addSubscription",
                "inputs": [
                    {
                        "name": "subscription",
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
                "name": "removeAsset",
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
                "name": "removeSubscription",
                "inputs": [
                    {
                        "name": "subscription",
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
                "name": "callAsset",
                "inputs": [
                    {
                        "name": "asset",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "callSubscription",
                "inputs": [
                    {
                        "name": "subscription",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onCreateAsset",
                "inputs": [
                    {
                        "name": "addr",
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
                "name": "onCreateSubscription",
                "inputs": [
                    {
                        "name": "addr",
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
                "name": "getDetails",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "demiurge",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "components": [
                            {
                                "name": "count",
                                "type": "uint16"
                            },
                            {
                                "name": "expireAt",
                                "type": "uint32"
                            }
                        ],
                        "name": "assetRoots",
                        "type": "map(address,tuple)"
                    },
                    {
                        "components": [
                            {
                                "name": "count",
                                "type": "uint16"
                            },
                            {
                                "name": "expireAt",
                                "type": "uint32"
                            }
                        ],
                        "name": "subscriptionRoots",
                        "type": "map(address,tuple)"
                    },
                    {
                        "name": "assets",
                        "type": "address[]"
                    },
                    {
                        "name": "subscriptions",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "getOnCreateAssetFunction",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getOnCreateSubscriptionFunction",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
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
            },
            {
                "components": [
                    {
                        "name": "count",
                        "type": "uint16"
                    },
                    {
                        "name": "expireAt",
                        "type": "uint32"
                    }
                ],
                "name": "_assetRoots",
                "type": "map(address,tuple)"
            },
            {
                "components": [
                    {
                        "name": "count",
                        "type": "uint16"
                    },
                    {
                        "name": "expireAt",
                        "type": "uint32"
                    }
                ],
                "name": "_subscriptionRoots",
                "type": "map(address,tuple)"
            },
            {
                "name": "_assets",
                "type": "map(address,bool)"
            },
            {
                "name": "_subscriptions",
                "type": "map(address,bool)"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "7ba58005f29a02c25d4d77d2ad5c036fc7e29d264bfa033e86754c7cc3dd204c",
};
export default CustomerContract;