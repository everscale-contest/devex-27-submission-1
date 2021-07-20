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
                        "name": "value0",
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
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getCustomerCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "getVendorCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
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
                        "name": "value0",
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
                        "name": "value0",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "te6ccgECHQEABS0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsaBQQcAngh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwLBgE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwGAiggghA5CZS4u+MCIIIQVmU6KbvjAg8HAzwgghA9GHVGuuMCIIIQSi5P1rrjAiCCEFZlOim64wINCggC/jD4Qm7jANP/+kGV1NHQ+kDf1w1/ldTR0NN/39GNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARdIcAAIJswIPpCbxPXC//DAN4gjhIwIcMAIJswIPpCbxPXC//AAN7f8uBkbSbIy/9wWIBA9EP4KHFYgED0FiUZCQH8cliAQPQWyPQAyfhLyM+EgPQA9ADPgclfIPkA+Cj6Qm8SyM+GQMoHy//J0AFTYcjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz5DRar5/yXH7AGxxIY4fI9DTAfpAMDHIz4cgznHPC2EByM+TWZTops7NyXD7AJEw4uMAf/hnFwI4MPhCbuMA+Ebyc3/4ZtTU0fgAAfhq+GvbPH/4ZwsXAhbtRNDXScIBio6A4hkMAjpw7UTQ9AWI+GqI+GuAQPQO8r3XC//4YnD4Y3D4ZhwcA3Yw+EJu4wDR2zwhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAL0YdUaM8WzMlw+wCRMOLjAH/4ZxkOFwAE+EoETCCCCL74qbrjAiCCCTSDaLrjAiCCEAtQ+ky64wIgghA5CZS4uuMCFhQSEAL+MPhCbuMA0//6QZXU0dD6QN/XDX+V1NHQ03/f0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABF0hwAAgmzAg+kJvE9cL/8MA3iCOEjAhwwAgmzAg+kJvE9cL/8AA3t/y4GRtJsjL/3BYgED0Q/gocViAQPQWJRkRAfxyWIBA9BbI9ADJ+EvIz4SA9AD0AM+ByV8g+QD4KPpCbxLIz4ZAygfL/8nQAVNhyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPkNFqvn/JcfsAbHEhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5LkJlLizs3JcPsAkTDi4wB/+GcXA3ww+EJu4wDT//pBldTR0PpA39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPki1D6TLOzclw+wCRMOLjAH/4ZxkTFwBwbSLIy/9wWIBA9EP4KHFYgED0FiFyWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfkAyM+KAEDL/8nQbCEDdjD4Qm7jANHbPCGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAgTSDaIzxbMyXD7AJEw4uMAf/hnGRUXAAT4SwN8MPhCbuMA0//6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IC++Kmzs3JcPsAkTDi4wB/+GcZGBcALPhL+Er4RvhD+ELIy//LP8oAzMzJ7VQAcG0iyMv/cFiAQPRD+ChxWIBA9BYhcliAQPQWyPQAyfhLyM+EgPQA9ADPgcn5AMjPigBAy//J0GwhACztRNDT/9M/0gDU1NH4a/hq+Gb4Y/hiAgr0pCD0oRwbABRzb2wgMC40Ny4wAAA=",
    code: "te6ccgECGgEABQAABCSK7VMg4wMgwP/jAiDA/uMC8gsXAgEZAngh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwIAwE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwDAiggghA5CZS4u+MCIIIQVmU6KbvjAgwEAzwgghA9GHVGuuMCIIIQSi5P1rrjAiCCEFZlOim64wIKBwUC/jD4Qm7jANP/+kGV1NHQ+kDf1w1/ldTR0NN/39GNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARdIcAAIJswIPpCbxPXC//DAN4gjhIwIcMAIJswIPpCbxPXC//AAN7f8uBkbSbIy/9wWIBA9EP4KHFYgED0FiUWBgH8cliAQPQWyPQAyfhLyM+EgPQA9ADPgclfIPkA+Cj6Qm8SyM+GQMoHy//J0AFTYcjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz5DRar5/yXH7AGxxIY4fI9DTAfpAMDHIz4cgznHPC2EByM+TWZTops7NyXD7AJEw4uMAf/hnFAI4MPhCbuMA+Ebyc3/4ZtTU0fgAAfhq+GvbPH/4ZwgUAhbtRNDXScIBio6A4hYJAjpw7UTQ9AWI+GqI+GuAQPQO8r3XC//4YnD4Y3D4ZhkZA3Yw+EJu4wDR2zwhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAL0YdUaM8WzMlw+wCRMOLjAH/4ZxYLFAAE+EoETCCCCL74qbrjAiCCCTSDaLrjAiCCEAtQ+ky64wIgghA5CZS4uuMCExEPDQL+MPhCbuMA0//6QZXU0dD6QN/XDX+V1NHQ03/f0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABF0hwAAgmzAg+kJvE9cL/8MA3iCOEjAhwwAgmzAg+kJvE9cL/8AA3t/y4GRtJsjL/3BYgED0Q/gocViAQPQWJRYOAfxyWIBA9BbI9ADJ+EvIz4SA9AD0AM+ByV8g+QD4KPpCbxLIz4ZAygfL/8nQAVNhyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPkNFqvn/JcfsAbHEhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5LkJlLizs3JcPsAkTDi4wB/+GcUA3ww+EJu4wDT//pBldTR0PpA39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPki1D6TLOzclw+wCRMOLjAH/4ZxYQFABwbSLIy/9wWIBA9EP4KHFYgED0FiFyWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfkAyM+KAEDL/8nQbCEDdjD4Qm7jANHbPCGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAgTSDaIzxbMyXD7AJEw4uMAf/hnFhIUAAT4SwN8MPhCbuMA0//6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IC++Kmzs3JcPsAkTDi4wB/+GcWFRQALPhL+Er4RvhD+ELIy//LP8oAzMzJ7VQAcG0iyMv/cFiAQPRD+ChxWIBA9BYhcliAQPQWyPQAyfhLyM+EgPQA9ADPgcn5AMjPigBAy//J0GwhACztRNDT/9M/0gDU1NH4a/hq+Gb4Y/hiAgr0pCD0oRkYABRzb2wgMC40Ny4wAAA=",
    codeHash: "aba35c65e166f99e96176146104b3c4d412868deb7ce7d4d0e84d0c7f591d395",
};
export default DemiurgeContract;