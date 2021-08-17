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
    tvc: "te6ccgECJAEAB14AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBQQjAtbtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zz4R27yfAgGA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8ICAGAzwgghAdpqpPu+MCIIIQUYni47vjAiCCEGi1Xz+64wIUCwcCJDD4Qm7jAPhG8nPR+ADbPH/4ZwgcAhbtRNDXScIBio6A4h8JAlRw7UTQ9AVxIYBA9A+OgN/4anIhgED0D46A3/hrgED0DvK91wv/+GJw+GMKCgECiCMEUCCCEDLrME+64wIgghA0DfjouuMCIIIQOBXXyLrjAiCCEFGJ4uO64wIRDw0MAp4w+Eby4Ez4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADRieLjjPFszJcPsAHxsCzDD4RvLgTPhCbuMA0x/4RFhvdfhk0//6QZXU0dD6QN/RbSLIy/9wWIBA9EP4KHFYgED0FgFyWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgEBvdPhk+QDIz4oAQMv/ydAxIR8OAbiOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkuBXXyLOzclw+wCOM/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQHI+ERvFc8LH87NyfhEbxT7AOLjAH/4ZxwCzDD4RvLgTPhCbuMA0x/4RFhvdfhk0//6QZXU0dD6QN/RbSLIy/9wWIBA9EP4KHFYgED0FgFyWIBA9BbI9ADJ+EvIz4SA9AD0AM+ByfhEcG9ycG9xgEBvdPhk+QDIz4oAQMv/ydAxIR8QAbiOHyPQ0wH6QDAxyM+HIM5xzwthAcjPktA346LOzclw+wCOM/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQHI+ERvFc8LH87NyfhEbxT7AOLjAH/4ZxwD/jD4RvLgTPhCbuMA0//6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABF8kIcAAIJswIPpCbxPXC//DAN4gjhIwIcMAIJswIPpCbxPXC//AAN7f8uBk2zxtJ8gfGRIC0sv/cFiAQPRD+ChxWIBA9BYmcliAQPQWyPQAyfhLyM+EgPQA9ADPgclfIPkA+Cj6Qm8SyM+GQMoHy//J0AFTccjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz5DRar5/yXH7ACXbPGyBIRgTAVKOHyPQ0wH6QDAxyM+HIM5xzwthAcjPksuswT7Ozclw+wCRMOLjAH/4ZxwEUCCCEATAMKi64wIgghAPLCK3uuMCIIIQGvoVr7rjAiCCEB2mqk+64wIeHRoVA/4w+Eby4Ez4Qm7jANP/+kGV1NHQ+kDf1w1/ldTR0NN/3/pBldTR0PpA39GNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARfJCHAACCbMCD6Qm8T1wv/wwDeII4SMCHDACCbMCD6Qm8T1wv/wADe3/LgZNs8bSfIHxkWAtLL/3BYgED0Q/gocViAQPQWJnJYgED0Fsj0AMn4SsjPhID0APQAz4HJXyD5APgo+kJvEsjPhkDKB8v/ydABU3HIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+Q0Wq+f8lx+wAl2zxsgSEYFwFSjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5J2mqk+zs3JcPsAkTDi4wB/+GccAF4g+kJvE9cL/44QIMjPhYjOgG/PQMmBAID7AI4R+EnIz4WIzoBvz0DJgQCA+wDiMAAc+CdvEGim/mChtX9y+wICnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eshjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAJr6Fa+M8WzMlw+wAfGwFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GccACj4S/hK+EP4QsjL/8s/z4PMzMntVAFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI8sIreDIzszJcPsA3n/4Zx8BUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAACEwDCogyM7MyXD7AN5/+GcfACrtRNDT/9M/0wAx1NTR+Gv4avhj+GIACvhG8uBMAgr0pCD0oSMiABRzb2wgMC40OC4wAAA=",
    code: "te6ccgECIQEABzEABCSK7VMg4wMgwP/jAiDA/uMC8gseAgEgAtbtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zz4R27yfAUDA4DtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZNwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8HR0DAzwgghAdpqpPu+MCIIIQUYni47vjAiCCEGi1Xz+64wIRCAQCJDD4Qm7jAPhG8nPR+ADbPH/4ZwUZAhbtRNDXScIBio6A4hwGAlRw7UTQ9AVxIYBA9A+OgN/4anIhgED0D46A3/hrgED0DvK91wv/+GJw+GMHBwECiCAEUCCCEDLrME+64wIgghA0DfjouuMCIIIQOBXXyLrjAiCCEFGJ4uO64wIODAoJAp4w+Eby4Ez4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADRieLjjPFszJcPsAHBgCzDD4RvLgTPhCbuMA0x/4RFhvdfhk0//6QZXU0dD6QN/RbSLIy/9wWIBA9EP4KHFYgED0FgFyWIBA9BbI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgEBvdPhk+QDIz4oAQMv/ydAxIRwLAbiOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkuBXXyLOzclw+wCOM/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQHI+ERvFc8LH87NyfhEbxT7AOLjAH/4ZxkCzDD4RvLgTPhCbuMA0x/4RFhvdfhk0//6QZXU0dD6QN/RbSLIy/9wWIBA9EP4KHFYgED0FgFyWIBA9BbI9ADJ+EvIz4SA9AD0AM+ByfhEcG9ycG9xgEBvdPhk+QDIz4oAQMv/ydAxIRwNAbiOHyPQ0wH6QDAxyM+HIM5xzwthAcjPktA346LOzclw+wCOM/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQHI+ERvFc8LH87NyfhEbxT7AOLjAH/4ZxkD/jD4RvLgTPhCbuMA0//6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABF8kIcAAIJswIPpCbxPXC//DAN4gjhIwIcMAIJswIPpCbxPXC//AAN7f8uBk2zxtJ8gcFg8C0sv/cFiAQPRD+ChxWIBA9BYmcliAQPQWyPQAyfhLyM+EgPQA9ADPgclfIPkA+Cj6Qm8SyM+GQMoHy//J0AFTccjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz5DRar5/yXH7ACXbPGyBIRUQAVKOHyPQ0wH6QDAxyM+HIM5xzwthAcjPksuswT7Ozclw+wCRMOLjAH/4ZxkEUCCCEATAMKi64wIgghAPLCK3uuMCIIIQGvoVr7rjAiCCEB2mqk+64wIbGhcSA/4w+Eby4Ez4Qm7jANP/+kGV1NHQ+kDf1w1/ldTR0NN/3/pBldTR0PpA39GNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARfJCHAACCbMCD6Qm8T1wv/wwDeII4SMCHDACCbMCD6Qm8T1wv/wADe3/LgZNs8bSfIHBYTAtLL/3BYgED0Q/gocViAQPQWJnJYgED0Fsj0AMn4SsjPhID0APQAz4HJXyD5APgo+kJvEsjPhkDKB8v/ydABU3HIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WzM+Q0Wq+f8lx+wAl2zxsgSEVFAFSjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5J2mqk+zs3JcPsAkTDi4wB/+GcZAF4g+kJvE9cL/44QIMjPhYjOgG/PQMmBAID7AI4R+EnIz4WIzoBvz0DJgQCA+wDiMAAc+CdvEGim/mChtX9y+wICnjD4RvLgTPhCbuMA0x/4RFhvdfhk0fhEcG9ycG9xgEBvdPhk+Eshjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAJr6Fa+M8WzMlw+wAcGAFwjjD4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U+wDi4wB/+GcZACj4S/hK+EP4QsjL/8s/z4PMzMntVAFQMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAI8sIreDIzszJcPsA3n/4ZxwBUDDR2zz4SiGOG40EcAAAAAAAAAAAAAAAACEwDCogyM7MyXD7AN5/+GccACrtRNDT/9M/0wAx1NTR+Gv4avhj+GIACvhG8uBMAgr0pCD0oSAfABRzb2wgMC40OC4wAAA=",
    codeHash: "62d7ddf5fdbeedc2aa87595cce0ffcd0adfdb6fc21567ac9abdb467b7dc59672",
};
export default DemiurgeContract;