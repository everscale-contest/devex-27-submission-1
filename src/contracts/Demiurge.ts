const DemiurgeContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "vendorCode",
                        "type": "cell"
                    },
                    {
                        "name": "customerCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
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
                        "name": "_answer_id",
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
                        "name": "_answer_id",
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
                        "name": "_answer_id",
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
                        "name": "_answer_id",
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
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "fd28176d2f50b1703aa01a8dfcbd68968fcadf1d31a4bf594a6fafb4893f41af",
};
export default DemiurgeContract;