const DemiurgeContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
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
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "f24e908356564c87b31ae21298c5e2727376029fcb43fbfbcc6cfc52ab5c6cae",
};
export default DemiurgeContract;