const VendorContract = {
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
                "inputs": [],
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
    codeHash: "4eefe1e599b76554c9068bc1762df4545d2d7ac378916b59cbe40b941addb654",
};
export default VendorContract;