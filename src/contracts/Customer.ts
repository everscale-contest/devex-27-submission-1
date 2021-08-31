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
                "name": "createService",
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
                "name": "clearServiceRoots",
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
                "name": "addService",
                "inputs": [
                    {
                        "name": "service",
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
                "name": "removeService",
                "inputs": [
                    {
                        "name": "service",
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
                "name": "callService",
                "inputs": [
                    {
                        "name": "service",
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
                "name": "onCreateService",
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
                        "name": "serviceRoots",
                        "type": "map(address,tuple)"
                    },
                    {
                        "name": "assets",
                        "type": "address[]"
                    },
                    {
                        "name": "services",
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
                "name": "getOnCreateServiceFunction",
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
                "name": "_serviceRoots",
                "type": "map(address,tuple)"
            },
            {
                "name": "_assets",
                "type": "map(address,bool)"
            },
            {
                "name": "_services",
                "type": "map(address,bool)"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "2e3b21e511e102752be288572c6e8912add91b1bfb7c1ee1d4dd45c315343b51",
};
export default CustomerContract;