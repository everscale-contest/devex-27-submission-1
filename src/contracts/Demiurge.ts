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
                        "name": "customerCode",
                        "type": "cell"
                    },
                    {
                        "name": "vendorCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
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
                        "name": "customer",
                        "type": "address"
                    }
                ]
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
                        "name": "vendor",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getCustomerCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "getVendorCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "getCustomerAddress",
                "inputs": [
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
                        "name": "customer",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getVendorAddress",
                "inputs": [
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
                        "name": "vendor",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "te6ccgECHQEABMsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsaBQQcAngh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwKBgE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwGAiggghA5CZS4u+MCIIIQVmU6KbvjAg4HAzwgghA9GHVGuuMCIIIQSi5P1rrjAiCCEFZlOim64wIMCQgDkDD4Qm7jANP/+kGV1NHQ+kDf1w1/ldTR0NN/39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk1mU6KbOzclw+wCRMOLjAH/4ZxkQFwI4MPhCbuMA+Ebyc3/4ZtTU0fgAAfhq+GvbPH/4ZwoXAhbtRNDXScIBio6A4hkLAjpw7UTQ9AWI+GqI+GuAQPQO8r3XC//4YnD4Y3D4ZhwcA3Yw+EJu4wDR2zwhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAL0YdUaM8WzMlw+wCRMOLjAH/4ZxkNFwEIiDD4ShwETCCCCL74qbrjAiCCCTSDaLrjAiCCEAtQ+ky64wIgghA5CZS4uuMCFhQSDwOQMPhCbuMA0//6QZXU0dD6QN/XDX+V1NHQ03/f0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+S5CZS4s7NyXD7AJEw4uMAf/hnGRAXAfyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARdIcAAIJswIPpCbxPXC//DAN4gjhIwIcMAIJswIPpCbxPXC//AAN7f8uBkbSbIy/9wWIBA9EP4KHFYgED0FiVyWIBA9BbI9ADJ+EvIz4SA9AD0AM+ByV8g+QARAHL4KPpCbxLIz4ZAygfL/8nQAVNhyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPkNFqvn/JcfsAbHEDfDD4Qm7jANP/+kGV1NHQ+kDf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SLUPpMs7NyXD7AJEw4uMAf/hnGRMXALqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARtI8jL/3BYgED0Q/gocViAQPQWInJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+QDIz4oAQMv/ydAxbCEDdjD4Qm7jANHbPCGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAgTSDaIzxbMyXD7AJEw4uMAf/hnGRUXAQiIMPhLHAN8MPhCbuMA0//6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IC++Kmzs3JcPsAkTDi4wB/+GcZGBcALPhL+Er4RvhD+ELIy//LP8oAzMzJ7VQAuo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG0jyMv/cFiAQPRD+ChxWIBA9BYicliAQPQWyPQAyfhLyM+EgPQA9ADPgcn5AMjPigBAy//J0DFsIQAs7UTQ0//TP9IA1NTR+Gv4avhm+GP4YgIK9KQg9KEcGwAUc29sIDAuNDcuMAAA",
    code: "te6ccgECGgEABJ4ABCSK7VMg4wMgwP/jAiDA/uMC8gsXAgEZAngh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwHAwE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwDAiggghA5CZS4u+MCIIIQVmU6KbvjAgsEAzwgghA9GHVGuuMCIIIQSi5P1rrjAiCCEFZlOim64wIJBgUDkDD4Qm7jANP/+kGV1NHQ+kDf1w1/ldTR0NN/39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk1mU6KbOzclw+wCRMOLjAH/4ZxYNFAI4MPhCbuMA+Ebyc3/4ZtTU0fgAAfhq+GvbPH/4ZwcUAhbtRNDXScIBio6A4hYIAjpw7UTQ9AWI+GqI+GuAQPQO8r3XC//4YnD4Y3D4ZhkZA3Yw+EJu4wDR2zwhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAL0YdUaM8WzMlw+wCRMOLjAH/4ZxYKFAEIiDD4ShkETCCCCL74qbrjAiCCCTSDaLrjAiCCEAtQ+ky64wIgghA5CZS4uuMCExEPDAOQMPhCbuMA0//6QZXU0dD6QN/XDX+V1NHQ03/f0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+S5CZS4s7NyXD7AJEw4uMAf/hnFg0UAfyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARdIcAAIJswIPpCbxPXC//DAN4gjhIwIcMAIJswIPpCbxPXC//AAN7f8uBkbSbIy/9wWIBA9EP4KHFYgED0FiVyWIBA9BbI9ADJ+EvIz4SA9AD0AM+ByV8g+QAOAHL4KPpCbxLIz4ZAygfL/8nQAVNhyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPkNFqvn/JcfsAbHEDfDD4Qm7jANP/+kGV1NHQ+kDf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SLUPpMs7NyXD7AJEw4uMAf/hnFhAUALqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARtI8jL/3BYgED0Q/gocViAQPQWInJYgED0Fsj0AMn4SsjPhID0APQAz4HJ+QDIz4oAQMv/ydAxbCEDdjD4Qm7jANHbPCGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAgTSDaIzxbMyXD7AJEw4uMAf/hnFhIUAQiIMPhLGQN8MPhCbuMA0//6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IC++Kmzs3JcPsAkTDi4wB/+GcWFRQALPhL+Er4RvhD+ELIy//LP8oAzMzJ7VQAuo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABG0jyMv/cFiAQPRD+ChxWIBA9BYicliAQPQWyPQAyfhLyM+EgPQA9ADPgcn5AMjPigBAy//J0DFsIQAs7UTQ0//TP9IA1NTR+Gv4avhm+GP4YgIK9KQg9KEZGAAUc29sIDAuNDcuMAAA",
    codeHash: "e82670fb279fe188a9fffd06acfc1fbd54d381c084278bda719bbd3f3372d4c0",
};
export default DemiurgeContract;