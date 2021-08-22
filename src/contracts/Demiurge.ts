const DemiurgeContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time"
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
    codeHash: "dd024b9bf57e009698d0da4c88fa811ec743db41b9dbadfbbbc4499ce08e2235",
};
export default DemiurgeContract;