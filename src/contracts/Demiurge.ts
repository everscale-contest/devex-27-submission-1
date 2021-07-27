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
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
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
            }
        ],
        "data": [],
        "events": []
    },
    tvc: "te6ccgECHQEABSwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsaBQQcAngh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwLBgE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwGAiggghA5CZS4u+MCIIIQVmU6KbvjAg8HAzwgghA9GHVGuuMCIIIQSi5P1rrjAiCCEFZlOim64wINCggC/jD4Qm7jANP/+kGV1NHQ+kDf1w1/ldTR0NN/39GNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARdIcAAIJswIPpCbxPXC//DAN4gjhIwIcMAIJswIPpCbxPXC//AAN7f8uBkbSbIy/9wWIBA9EP4KHFYgED0FiUZCQH8cliAQPQWyPQAyfhKyM+EgPQA9ADPgclfIPkA+Cj6Qm8SyM+GQMoHy//J0AFTYcjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz5DRar5/yXH7AGxxIY4fI9DTAfpAMDHIz4cgznHPC2EByM+TWZTops7NyXD7AJEw4uMAf/hnFwI2MPhCbuMA+Ebyc3/4ZtTU0fgA+Gv4ats8f/hnCxcCFu1E0NdJwgGKjoDiGQwCOnDtRND0BYj4aoj4a4BA9A7yvdcL//hicPhjcPhmHBwDdjD4Qm7jANHbPCGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAvRh1RozxbMyXD7AJEw4uMAf/hnGQ4XAAT4SwRMIIIIvvipuuMCIIIJNINouuMCIIIQC1D6TLrjAiCCEDkJlLi64wIWFBIQAv4w+EJu4wDT//pBldTR0PpA39cNf5XU0dDTf9/RjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEXSHAACCbMCD6Qm8T1wv/wwDeII4SMCHDACCbMCD6Qm8T1wv/wADe3/LgZG0myMv/cFiAQPRD+ChxWIBA9BYlGREB/HJYgED0Fsj0AMn4SsjPhID0APQAz4HJXyD5APgo+kJvEsjPhkDKB8v/ydABU2HIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+Q0Wq+f8lx+wBscSGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkuQmUuLOzclw+wCRMOLjAH/4ZxcDfDD4Qm7jANP/+kGV1NHQ+kDf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SLUPpMs7NyXD7AJEw4uMAf/hnGRMXAHBtIsjL/3BYgED0Q/gocViAQPQWIXJYgED0Fsj0AMn4S8jPhID0APQAz4HJ+QDIz4oAQMv/ydBsIQN2MPhCbuMA0ds8IY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACBNINojPFszJcPsAkTDi4wB/+GcZFRcABPhKA3ww+EJu4wDT//pBldTR0PpA39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkgL74qbOzclw+wCRMOLjAH/4ZxkYFwAs+Ev4SvhG+EP4QsjL/8s/ygDMzMntVABwbSLIy/9wWIBA9EP4KHFYgED0FiFyWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfkAyM+KAEDL/8nQbCEALO1E0NP/0z/SANTU0fhr+Gr4Zvhj+GICCvSkIPShHBsAFHNvbCAwLjQ3LjAAAA==",
    code: "te6ccgECGgEABP8ABCSK7VMg4wMgwP/jAiDA/uMC8gsXAgEZAngh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds8+Edu8nwIAwE6ItDXCwOpOADcIccA3CHXDR/yvCHdAds8+Edu8nwDAiggghA5CZS4u+MCIIIQVmU6KbvjAgwEAzwgghA9GHVGuuMCIIIQSi5P1rrjAiCCEFZlOim64wIKBwUC/jD4Qm7jANP/+kGV1NHQ+kDf1w1/ldTR0NN/39GNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARdIcAAIJswIPpCbxPXC//DAN4gjhIwIcMAIJswIPpCbxPXC//AAN7f8uBkbSbIy/9wWIBA9EP4KHFYgED0FiUWBgH8cliAQPQWyPQAyfhKyM+EgPQA9ADPgclfIPkA+Cj6Qm8SyM+GQMoHy//J0AFTYcjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz5DRar5/yXH7AGxxIY4fI9DTAfpAMDHIz4cgznHPC2EByM+TWZTops7NyXD7AJEw4uMAf/hnFAI2MPhCbuMA+Ebyc3/4ZtTU0fgA+Gv4ats8f/hnCBQCFu1E0NdJwgGKjoDiFgkCOnDtRND0BYj4aoj4a4BA9A7yvdcL//hicPhjcPhmGRkDdjD4Qm7jANHbPCGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAvRh1RozxbMyXD7AJEw4uMAf/hnFgsUAAT4SwRMIIIIvvipuuMCIIIJNINouuMCIIIQC1D6TLrjAiCCEDkJlLi64wITEQ8NAv4w+EJu4wDT//pBldTR0PpA39cNf5XU0dDTf9/RjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEXSHAACCbMCD6Qm8T1wv/wwDeII4SMCHDACCbMCD6Qm8T1wv/wADe3/LgZG0myMv/cFiAQPRD+ChxWIBA9BYlFg4B/HJYgED0Fsj0AMn4SsjPhID0APQAz4HJXyD5APgo+kJvEsjPhkDKB8v/ydABU2HIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+Q0Wq+f8lx+wBscSGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkuQmUuLOzclw+wCRMOLjAH/4ZxQDfDD4Qm7jANP/+kGV1NHQ+kDf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+SLUPpMs7NyXD7AJEw4uMAf/hnFhAUAHBtIsjL/3BYgED0Q/gocViAQPQWIXJYgED0Fsj0AMn4S8jPhID0APQAz4HJ+QDIz4oAQMv/ydBsIQN2MPhCbuMA0ds8IY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACBNINojPFszJcPsAkTDi4wB/+GcWEhQABPhKA3ww+EJu4wDT//pBldTR0PpA39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkgL74qbOzclw+wCRMOLjAH/4ZxYVFAAs+Ev4SvhG+EP4QsjL/8s/ygDMzMntVABwbSLIy/9wWIBA9EP4KHFYgED0FiFyWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfkAyM+KAEDL/8nQbCEALO1E0NP/0z/SANTU0fhr+Gr4Zvhj+GICCvSkIPShGRgAFHNvbCAwLjQ3LjAAAA==",
    codeHash: "416bba5cdeda7e4d10862fccda3462e821c4a0dbe7a7a034532d71e83927816b",
};
export default DemiurgeContract;