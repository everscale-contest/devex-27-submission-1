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
    codeHash: "037a2d096e44032e43bd78c65039d147174fa563eadac6344df77c242e3fae25",
};
export default DemiurgeContract;