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
    codeHash: "82df4f5b89bd270906b81d89f617447612997bff588b73537b034d7425948efd",
};
export default DemiurgeContract;