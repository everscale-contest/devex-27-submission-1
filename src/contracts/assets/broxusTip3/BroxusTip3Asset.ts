const BroxusTip3AssetContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "balanceAfterDeployment",
                        "type": "uint128"
                    },
                    {
                        "name": "walletAddress",
                        "type": "address"
                    },
                    {
                        "name": "deployEmptyWalletGrams",
                        "type": "uint128"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "notifyWalletDeployed",
                "inputs": [
                    {
                        "name": "root",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setReceiveCallback",
                "inputs": [
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setWallet",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployWallet",
                "inputs": [
                    {
                        "name": "deployEmptyWalletGrams",
                        "type": "uint128"
                    },
                    {
                        "name": "gasReceiver",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDetails",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "tip3Root",
                        "type": "address"
                    },
                    {
                        "name": "wallet",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "_root",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_root",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "_owner",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "_tip3Root",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_tip3Root",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_root",
                "type": "address"
            },
            {
                "key": 2,
                "name": "_owner",
                "type": "address"
            },
            {
                "key": 3,
                "name": "_tip3Root",
                "type": "address"
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
                "name": "_root",
                "type": "address"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_tip3Root",
                "type": "address"
            },
            {
                "name": "_wallet",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECGwEABacABCSK7VMg4wMgwP/jAiDA/uMC8gsYAgEaAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8EQMDgO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHAOMCIdcNH/K8IeMDAds8+Edu8nwXFwMDPCCCED6lRDW74wIgghBYi0USu+MCIIIQaHDYs7rjAgwGBAK2MPhG8uBM+EJu4wDTH/hEWG91+GTR+ERwb3Jwb3GAQG90+GT4SvhL+Ez4TSSOLSbQ0wH6QDAxyM+HIM5xzwthXjDIz5Ohw2LOzlUgyM5ZyM4ByM7Nzc3NyXD7ABYFAZKOQfhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaV4wyPhEbxXPCx/OVSDIzlnIzgHIzs3Nzc3J+ERvFPsA4uMAf/hnDwRQIIIQP1hg+7rjAiCCEEgHxJC64wIgghBIU7s3uuMCIIIQWItFErrjAgoJCAcBUDDR2zz4TCGOG40EcAAAAAAAAAAAAAAAADYi0USgyM7OyXD7AN5/+GcWAsAw+Eby4Ez4Qm7jAPpBldTR0PpA39Eg+En4TccFIJYwIPhMxwXe8uBmW/gAf/go+E3Iz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxZZyM+Rx7uh1s7KAM3JcPsA2zx/+GcWDwNmMPhG8uBM+EJu4wD6QZXU0dD6QN/6QZXU0dD6QN/R+En4S8cF8uBlIfhtINs8W9s8f/hnFgsPA7Iw+Eby4Ez4Qm7jAPpBldTR0PpA39H4SfhLxwXy4GX4AH/4KPhNyM+FiM6NBE5iWgAAAAAAAAAAAAAAAAAAwM8WWcjPkce7odbOygDNyXD7ACDbPDDbPH/4ZxYLDwBYIPpCbxPXC/+fIMjPhYjOgG/PQMmAQPsAjhD4ScjPhYjOgG/PQMmAQPsA4jAEUCCCEAnAa4664wIgghAP2GCsuuMCIIIQMA/zybrjAiCCED6lRDW64wIVFA4NA1Yw+Eby4Ez4Qm7jANN/+kGV1NHQ+kDf0fhJ+EvHBfLgZVyAQNs8W9s8f/hnFhAPA4ww+EJu4wD4RvJz03/6QZXU0dD6QN/XDX+V1NHQ03/f+kGV1NHQ+kDf0fhJ+ErHBfLgZCNy+wIi+G1cgQCA2zxfBNs8f/hnERAPAEj4TfhM+Ev4SvhD+ELIy//LP8+DzlUgyM5ZyM4ByM7Nzc3J7VQAdCH4KHAl+EzIz4WIzo0ETmJaAAAAAAAAAAAAAAAAAADAzxZVMMjPkVCsWcrLf8v/zgHIzs3NyQH7AFsCFu1E0NdJwgGKjoDiFhIB1HDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GtzIYBA9A4TALqOJI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN/4bI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhtgED0DvK91wv/+GJw+GMBUDDR2zz4SyGOG40EcAAAAAAAAAAAAAAAACP2GCsgyM7OyXD7AN5/+GcWAVAw0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAicBrjoMjOzslw+wDef/hnFgBQ7UTQ0//TP9MAMfpA1NHQ+kDU0dD6QNTR0PpA0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShGhkAFHNvbCAwLjQ4LjAAAA==",
    codeHash: "f3b17ebba7d4e5b2da1b43d3034263bd09871e154b6053b7f56b5d4e11c1d8db",
};
export default BroxusTip3AssetContract;