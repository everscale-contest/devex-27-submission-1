const DemiurgeContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "createVendor",
                "inputs": [
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "deployValue",
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
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "createCustomer",
                "inputs": [
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "deployValue",
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
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getVendorCode",
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
                "name": "getCustomerCode",
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
                "name": "getVendorAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
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
                "name": "getCustomerAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
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
                "name": "_vendorCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_vendorCode",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "_customerCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_customerCode",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_vendorCode",
                "type": "cell"
            },
            {
                "key": 2,
                "name": "_customerCode",
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
                "name": "_vendorCode",
                "type": "cell"
            },
            {
                "name": "_customerCode",
                "type": "cell"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "8a078033d59e14b2d0fe7aabfb7b746e10e7a714d15b158eac0a53580a5b5c5a",
};
export default DemiurgeContract;