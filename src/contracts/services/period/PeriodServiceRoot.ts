const PeriodServiceRootContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "deploymentValue",
                        "type": "uint128"
                    },
                    {
                        "name": "periodDuration",
                        "type": "uint32"
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
                        "name": "subscription",
                        "type": "address"
                    },
                    {
                        "name": "receiver",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getServiceCode",
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
                "name": "getSubscriptionCode",
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
                "name": "getServiceAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
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
                "name": "_serviceCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_serviceCode",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "_subscriptionCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_subscriptionCode",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_serviceCode",
                "type": "cell"
            },
            {
                "key": 2,
                "name": "_subscriptionCode",
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
                "name": "_serviceCode",
                "type": "cell"
            },
            {
                "name": "_subscriptionCode",
                "type": "cell"
            }
        ]
    },
    tvc: "te6ccgECHgEABUsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsbBQQdAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CgYDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwaGgYCKCCCEB9zA4q74wIgghBptxy9u+MCDwcDPCCCECgtwiC64wIgghBotV8/uuMCIIIQabccvbrjAg0JCAKeMPhG8uBM+EJu4wDTH/hEWG91+GTR+ERwb3Jwb3GAQG90+GT4SyGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA6bccvYzxbMyXD7ABkSAiQw+EJu4wD4RvJz0fgA2zx/+GcKFwIW7UTQ10nCAYqOgOIZCwJUcO1E0PQFcSGAQPQPjoDf+GpyIYBA9A+OgN/4a4BA9A7yvdcL//hicPhjDAwBAogdAtow+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQW+ElyWIBA9Bb4S3NYgED0F8j0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0DEhGQ4BuI4fI9DTAfpAMDHIz4cgznHPC2EByM+SoLcIgs7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnFwRQIIIQBc/oL7rjAiCCEAoYy3664wIgghAdhD+yuuMCIIIQH3MDirrjAhQTERABUDDR2zz4SyGOG40EcAAAAAAAAAAAAAAAACfcwOKgyM7MyXD7AN5/+GcZAp4w+Eby4Ez4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACdhD+yjPFszJcPsAGRIBcI4w+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8zJ+ERvFPsA4uMAf/hnFwFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAIoYy36DIzszJcPsA3n/4ZxkD/jD4RvLgTPhCbuMA0x/4RFhvdfhk03/TH9N/+kGV1NHQ+kDf0ds8bXDIy/9wWIBA9EP4KHFYgED0FvhJcliAQPQW+EtzWIBA9BfI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgQCAb3T4ZCFVAlUDVQIg+QD4KPpCbxLIz4ZAygcZGBUBvsv/ydBVMFUFJcjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz4NVIMjPkBP/yuLLH8t/zs3JcfsAASKOIyTQ0wH6QDAxyM+HIM5xzwthAsjPkhc/oL7OAcjOzc3JcPsAFgF+jjf4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kCyPhEbxXPCx/OAcjOzc3J+ERvFPsA4uMAf/hnFwAo+Ev4SvhD+ELIy//LP8+DzMzJ7VQAHPgnbxBopv5gobV/cvsCACrtRNDT/9M/0wAx1NTR+Gv4avhj+GIACvhG8uBMAgr0pCD0oR0cABRzb2wgMC40OS4wAAA=",
    code: "te6ccgECGwEABR4ABCSK7VMg4wMgwP/jAiDA/uMC8gsYAgEaAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8BwMDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwXFwMCKCCCEB9zA4q74wIgghBptxy9u+MCDAQDPCCCECgtwiC64wIgghBotV8/uuMCIIIQabccvbrjAgoGBQKeMPhG8uBM+EJu4wDTH/hEWG91+GTR+ERwb3Jwb3GAQG90+GT4SyGOJyPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAA6bccvYzxbMyXD7ABYPAiQw+EJu4wD4RvJz0fgA2zx/+GcHFAIW7UTQ10nCAYqOgOIWCAJUcO1E0PQFcSGAQPQPjoDf+GpyIYBA9A+OgN/4a4BA9A7yvdcL//hicPhjCQkBAogaAtow+Eby4Ez4Qm7jANMf+ERYb3X4ZPpBldTR0PpA39FtcMjL/3BYgED0Q/gocViAQPQW+ElyWIBA9Bb4S3NYgED0F8j0AMn4SsjPhID0APQAz4HJ+ERwb3Jwb3GAQG90+GT5AMjPigBAy//J0DEhFgsBuI4fI9DTAfpAMDHIz4cgznHPC2EByM+SoLcIgs7NyXD7AI4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnFARQIIIQBc/oL7rjAiCCEAoYy3664wIgghAdhD+yuuMCIIIQH3MDirrjAhEQDg0BUDDR2zz4SyGOG40EcAAAAAAAAAAAAAAAACfcwOKgyM7MyXD7AN5/+GcWAp4w+Eby4Ez4Qm7jANMf+ERYb3X4ZNH4RHBvcnBvcYBAb3T4ZPhKIY4nI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACdhD+yjPFszJcPsAFg8BcI4w+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8zJ+ERvFPsA4uMAf/hnFAFQMNHbPPhKIY4bjQRwAAAAAAAAAAAAAAAAIoYy36DIzszJcPsA3n/4ZxYD/jD4RvLgTPhCbuMA0x/4RFhvdfhk03/TH9N/+kGV1NHQ+kDf0ds8bXDIy/9wWIBA9EP4KHFYgED0FvhJcliAQPQW+EtzWIBA9BfI9ADJ+ErIz4SA9AD0AM+ByfhEcG9ycG9xgQCAb3T4ZCFVAlUDVQIg+QD4KPpCbxLIz4ZAygcWFRIBvsv/ydBVMFUFJcjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxbMz4NVIMjPkBP/yuLLH8t/zs3JcfsAASKOIyTQ0wH6QDAxyM+HIM5xzwthAsjPkhc/oL7OAcjOzc3JcPsAEwF+jjf4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kCyPhEbxXPCx/OAcjOzc3J+ERvFPsA4uMAf/hnFAAo+Ev4SvhD+ELIy//LP8+DzMzJ7VQAHPgnbxBopv5gobV/cvsCACrtRNDT/9M/0wAx1NTR+Gv4avhj+GIACvhG8uBMAgr0pCD0oRoZABRzb2wgMC40OS4wAAA=",
    codeHash: "230fc4670ef2d3e5b39ce261910d3742cb2c3aa8171e6ddd68284e01ab80c2e3",
};
export default PeriodServiceRootContract;