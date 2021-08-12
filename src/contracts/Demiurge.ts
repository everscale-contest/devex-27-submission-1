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
                        "name": "gasBackAddress",
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
                        "name": "gasBackAddress",
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
    codeHash: "f7fb403c4b0230414918d4a56ba7efa47c943d115bdadf1853264a875d451183",
};
export default DemiurgeContract;