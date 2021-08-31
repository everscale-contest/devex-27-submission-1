const PeriodServiceContract = {
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
                        "name": "periodDuration",
                        "type": "uint32"
                    },
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
                "name": "createSubscription",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "deploymentValue",
                        "type": "uint128"
                    },
                    {
                        "name": "balanceAfterDeployment",
                        "type": "uint128"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "subscription",
                        "type": "address"
                    },
                    {
                        "name": "receiver",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "createOffer",
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
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "clearOfferRoots",
                "inputs": [
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "addOffer",
                "inputs": [
                    {
                        "name": "offer",
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
                "name": "removeOffer",
                "inputs": [
                    {
                        "name": "offer",
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
                "name": "callOffer",
                "inputs": [
                    {
                        "name": "offer",
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
                "name": "onCreateOffer",
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
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "periodDuration",
                        "type": "uint32"
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
                        "name": "offerRoots",
                        "type": "map(address,tuple)"
                    },
                    {
                        "name": "offers",
                        "type": "address[]"
                    }
                ]
            },
            {
                "name": "getOnCreateOfferFunction",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getSubscriptionCode",
                "inputs": [
                    {
                        "name": "answerId",
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
                "name": "getSubscriptionAddress",
                "inputs": [
                    {
                        "name": "answerId",
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
                "name": "_subscriptionCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_subscriptionCode",
                        "type": "cell"
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
                "name": "_subscriptionCode",
                "type": "cell"
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
                "name": "_subscriptionCode",
                "type": "cell"
            },
            {
                "name": "_periodDuration",
                "type": "uint32"
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
                "name": "_offerRoots",
                "type": "map(address,tuple)"
            },
            {
                "name": "_offers",
                "type": "map(address,bool)"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "1d84e9680f14f05c0e3a128f8d0dc20b60294af0592127e1150235fa31a6eabf",
};
export default PeriodServiceContract;