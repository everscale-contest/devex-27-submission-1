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
    codeHash: "4d7f4a63f1fc5ddb1735340e63e44fea16eefd8a39e8b468fa2d40a664a1abb8",
};
export default DemiurgeContract;