import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {testTimeout} from './_utils/testTimeout'
import {RootTokenContractOwner} from './_src/RootTokenContractOwner'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getPayload, getRandomKeyPair, stringToHex, x0, ZERO_KEY_PAIR, ZERO_UINT256} from 'jton'
import {RootTokenContract, RootTokenContractContract} from 'jton-contracts/dist/broxus/fungibleToken/RootTokenContract'
import {TONTokenWallet, TONTokenWalletContract} from 'jton-contracts/dist/broxus/fungibleToken/TONTokenWallet'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        rootTokenContractOwner: config.contracts.rootTokenContractOwner.requiredForDeployment * B,
        rootTokenContract: config.contracts.rootTokenContract.requiredForDeployment * B,
        safeMultisigWallet: 0.6 * B
    },
    safeMultisigWallet: {
        deployEmptyWallet: {
            value: 0.2 * B,
            deploy_grams: 0.1 * B
        },
        mint: {
            value: 0.2 * B,
        }
    }
}
const tokens: number = 100

it('mint', async () => {
    // RootTokenContractOwner + RootTokenContract
    const rootTokenContractKeys: KeyPair = await getRandomKeyPair(client)
    const rootTokenContract: RootTokenContract = new RootTokenContract(client, rootTokenContractKeys, {
        _randomNonce: 0,
        name: stringToHex('TEST'),
        symbol: stringToHex('TEST'),
        decimals: 8,
        wallet_code: TONTokenWalletContract.code
    })
    const rootTokenContractOwnerKeys: KeyPair = await getRandomKeyPair(client)
    const rootTokenContractOwner: RootTokenContractOwner = new RootTokenContractOwner(
        client,
        rootTokenContractOwnerKeys
    )
    await giver.sendTransaction({
        dest: await rootTokenContractOwner.address(),
        value: values.giver.rootTokenContractOwner
    })
    await rootTokenContractOwner.deploy({
        root: await rootTokenContract.address()
    })
    await giver.sendTransaction({
        dest: await rootTokenContract.address(),
        value: values.giver.rootTokenContract
    })
    await rootTokenContract.deploy({
        root_public_key_: ZERO_UINT256,
        root_owner_address_: await rootTokenContractOwner.address()
    })


    // SafeMultisigWallet
    const safeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
    const safeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, safeMultisigWalletKeys)
    await giver.sendTransaction({
        dest: await safeMultisigWallet.address(),
        value: values.giver.safeMultisigWallet
    })
    await safeMultisigWallet.deploy({
        owners: [x0(safeMultisigWalletKeys.public)],
        reqConfirms: 1
    })


    // deployEmptyWallet
    await safeMultisigWallet.sendTransaction({
        dest: await rootTokenContract.address(),
        value: values.safeMultisigWallet.deployEmptyWallet.value,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            RootTokenContractContract.abi,
            RootTokenContract.EXTERNAL.deployEmptyWallet,
            {
                deploy_grams: values.safeMultisigWallet.deployEmptyWallet.deploy_grams,
                wallet_public_key_: ZERO_UINT256,
                owner_address_: await safeMultisigWallet.address(),
                gas_back_address: await safeMultisigWallet.address()
            }
        )
    })


    // Check result of deployEmptyWallet
    const tonTokenWallet: TONTokenWallet = new TONTokenWallet(client, ZERO_KEY_PAIR, {
        root_address: await rootTokenContract.address(),
        code: TONTokenWalletContract.code,
        wallet_public_key: ZERO_UINT256,
        owner_address: await safeMultisigWallet.address()
    })
    await tonTokenWallet.waitForTransaction()
    expect(await tonTokenWallet.accountType()).toBe(AccountType.active)


    // deployEmptyWallet
    await safeMultisigWallet.sendTransaction({
        dest: await rootTokenContractOwner.address(),
        value: values.safeMultisigWallet.mint.value,
        bounce: false,
        flags: 1,
        payload: await getPayload(
            client,
            RootTokenContractContract.abi,
            RootTokenContractOwner.EXTERNAL.mint,
            {
                tokens: tokens,
                to: await tonTokenWallet.address()
            }
        )
    })
    await tonTokenWallet.waitForTransaction()
    expect((await tonTokenWallet.getDetails()).balance).toBe(tokens.toString())
    client.close()
}, testTimeout)