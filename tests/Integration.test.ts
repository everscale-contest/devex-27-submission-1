import {testTimeout} from './_utils/testTimeout'
import {prepareGiverV2} from 'jton-contracts/dist/tonlabs/GiverV2'
import {config} from '../config'
import {KeyPair} from '@tonclient/core/dist/modules'
import {AccountType, B, getPayload, getRandomKeyPair, x0, ZERO_KEY_PAIR, ZERO_UINT256} from 'jton'
import {Demiurge, DemiurgeContract} from '../src/Demiurge'
import {Customer, CustomerContract} from '../src/Customer'
import {Vendor, VendorContract} from '../src/Vendor'
import {SafeMultisigWallet} from 'jton-contracts/dist/tonlabs/SafeMultisigWallet'
import {CrystalAssetRoot, CrystalAssetRootContract} from '../src/contracts/assets/CrystalAssetRoot'
import {CrystalAsset, CrystalAssetContract} from '../src/contracts/assets/CrystalAsset'
import {PeriodServiceRoot, PeriodServiceRootContract} from '../src/contracts/services/PeriodServiceRoot'
import PeriodServiceContract from '../src/contracts/services/period/PeriodService'
import PeriodSubscriptionContract from '../src/contracts/services/period/PeriodSubscription'
import {PeriodService} from '../src/contracts/services/PeriodService'
import {PeriodCrystalOfferRoot, PeriodCrystalOfferRootContract} from '../src/contracts/services/PeriodCrystalOfferRoot'
import PeriodCrystalOfferContract from '../src/contracts/services/period/offers/crystal/PeriodCrystalOffer'
import PeriodCrystalAccepterContract from '../src/contracts/services/period/offers/crystal/PeriodCrystalAccepter'
import {PeriodCrystalOffer} from '../src/contracts/services/PeriodCrystalOffer'
import {PeriodSubscription} from '../src/contracts/services/PeriodSubscription'

const {client, giver} = prepareGiverV2(config, config.contracts.giver.keys)
const values = {
    giver: {
        demiurge: B,
        vendorSafeMultisigWallet: 10 * B,
        customerSafeMultisigWallet: 10 * B,
        crystalAssetRoot: config.contracts.crystalAssetRoot.requiredForDeployment * B,
        periodServiceRoot: config.contracts.periodServiceRoot.requiredForDeployment * B,
        periodCrystalOfferRoot: config.contracts.periodCrystalOfferRoot.requiredForDeployment * B,
    },
    vendorSafeMultisigWallet: {
        createVendor: {
            value: 0.5 * B,
            deploymentValue: 0.2 * B,
            balanceAfterDeployment: 0.1 * B
        },
        createAsset: {
            value: 0.5 * B,
            deploymentValue: 0.2 * B,
            balanceAfterDeployment: 0.1 * B
        },
        createService: {
            value: 0.5 * B,
            deploymentValue: 0.3 * B,
            balanceAfterDeployment: 0.2 * B
        },
        createOffer: {
            value: 0.5 * B,
            deploymentValue: 0.3 * B,
            balanceAfterDeployment: 0.2 * B
        }
    },
    customerSafeMultisigWallet: {
        createCustomer: {
            value: 0.5 * B,
            deploymentValue: 0.2 * B,
            balanceAfterDeployment: 0.1 * B
        },
        createAsset: {
            value: 0.5 * B,
            deploymentValue: 0.2 * B,
            balanceAfterDeployment: 0.1 * B
        },
        createSubscription: {
            value: 0.5 * B,
            deploymentValue: 0.3 * B,
            balanceAfterDeployment: 0.2 * B
        }
    }
}

it('createVendor', async () => {
        // Demiurge
        const demiurgeKeys: KeyPair = await getRandomKeyPair(client)
        const demiurge: Demiurge = new Demiurge(client, demiurgeKeys, {
            _vendorCode: VendorContract.code,
            _customerCode: CustomerContract.code
        })
        await giver.sendTransaction({
            dest: await demiurge.address(),
            value: values.giver.demiurge
        })
        await demiurge.deploy()


        // vendorSafeMultisigWallet
        const vendorSafeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
        const vendorSafeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(client, vendorSafeMultisigWalletKeys)
        await giver.sendTransaction({
            dest: await vendorSafeMultisigWallet.address(),
            value: values.giver.vendorSafeMultisigWallet
        })
        await vendorSafeMultisigWallet.deploy({
            owners: [x0(vendorSafeMultisigWalletKeys.public)],
            reqConfirms: 1
        })
        await vendorSafeMultisigWallet.sendTransaction({
            dest: await demiurge.address(),
            value: values.vendorSafeMultisigWallet.createVendor.value,
            bounce: true,
            flags: 1,
            payload: await getPayload(
                client,
                DemiurgeContract.abi,
                Demiurge.EXTERNAL.createVendor,
                {
                    publicKey: ZERO_UINT256,
                    owner: await vendorSafeMultisigWallet.address(),
                    deploymentValue: values.vendorSafeMultisigWallet.createVendor.deploymentValue,
                    balanceAfterDeployment: values.vendorSafeMultisigWallet.createVendor.balanceAfterDeployment,
                    gasReceiver: await vendorSafeMultisigWallet.address()
                }
            )
        })


        // Vendor
        const vendor: Vendor = new Vendor(client, ZERO_KEY_PAIR, {
            _demiurge: await demiurge.address(),
            _owner: await vendorSafeMultisigWallet.address()
        })
        await vendor.waitForTransaction()
        expect(await vendor.accountType()).toBe(AccountType.active)


        // CrystalAssetRoot
        const crystalAssetRootKeys: KeyPair = await getRandomKeyPair(client)
        const crystalAssetRoot: CrystalAssetRoot = new CrystalAssetRoot(client, crystalAssetRootKeys, {
                _code: CrystalAssetContract.code
            }
        )
        await giver.sendTransaction({
            dest: await crystalAssetRoot.address(),
            value: values.giver.crystalAssetRoot
        })
        await crystalAssetRoot.deploy()
        expect(await crystalAssetRoot.accountType()).toBe(AccountType.active)


        // Vendor CrystalAsset
        const vendorCrystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
            _root: await crystalAssetRoot.address(),
            _owner: await vendor.address()
        })
        await vendorSafeMultisigWallet.sendTransaction({
            dest: await vendor.address(),
            value: values.vendorSafeMultisigWallet.createAsset.value,
            bounce: false,
            flags: 1,
            payload: await getPayload(
                client,
                VendorContract.abi,
                Vendor.EXTERNAL.createAsset,
                {
                    root: await crystalAssetRoot.address(),
                    payload: await getPayload(
                        client,
                        CrystalAssetRootContract.abi,
                        CrystalAssetRoot.EXTERNAL.create,
                        {
                            answerId: await vendor.getOnCreateAssetFunction(),
                            owner: await vendor.address(),
                            deploymentValue: values.vendorSafeMultisigWallet.createAsset.deploymentValue,
                            balanceAfterDeployment: values.vendorSafeMultisigWallet.createAsset.balanceAfterDeployment,
                            gasReceiver: await vendorSafeMultisigWallet.address()
                        }
                    ),
                    timeout: 20 * 60
                }
            )
        })
        await crystalAssetRoot.waitForTransaction()
        await vendorCrystalAsset.waitForTransaction()
        await vendor.waitForTransaction()
        expect(await vendorCrystalAsset.accountType()).toBe(AccountType.active)
        expect((await vendor.getDetails()).assets).toStrictEqual([await vendorCrystalAsset.address()])


        // PeriodServiceRoot
        const periodServiceRootKeys: KeyPair = await getRandomKeyPair(client)
        const periodServiceRoot: PeriodServiceRoot = new PeriodServiceRoot(client, periodServiceRootKeys, {
            _serviceCode: PeriodServiceContract.code,
            _subscriptionCode: PeriodSubscriptionContract.code
        })
        await giver.sendTransaction({
            dest: await periodServiceRoot.address(),
            value: values.giver.periodServiceRoot
        })
        await periodServiceRoot.deploy()
        expect(await periodServiceRoot.accountType()).toBe(AccountType.active)


        // PeriodService
        const periodService: PeriodService = new PeriodService(client, ZERO_KEY_PAIR, {
            _root: await periodServiceRoot.address(),
            _owner: await vendor.address(),
            _subscriptionCode: PeriodSubscriptionContract.code
        })
        await vendorSafeMultisigWallet.sendTransaction({
            dest: await vendor.address(),
            value: values.vendorSafeMultisigWallet.createService.value,
            bounce: false,
            flags: 1,
            payload: await getPayload(
                client,
                VendorContract.abi,
                Vendor.EXTERNAL.createService,
                {
                    root: await periodServiceRoot.address(),
                    payload: await getPayload(
                        client,
                        PeriodServiceRootContract.abi,
                        PeriodServiceRoot.EXTERNAL.create,
                        {
                            answerId: await vendor.getOnCreateServiceFunction(),
                            deploymentValue: values.vendorSafeMultisigWallet.createService.deploymentValue,
                            periodDuration: 60 * 60 * 24 * 7,
                            balanceAfterDeployment: values.vendorSafeMultisigWallet.createService.balanceAfterDeployment,
                            gasReceiver: await vendorSafeMultisigWallet.address()
                        }
                    ),
                    timeout: 20 * 60
                }
            )
        })
        await periodServiceRoot.waitForTransaction()
        await periodService.waitForTransaction()
        await vendor.waitForTransaction()
        expect(await periodService.accountType()).toBe(AccountType.active)
        expect((await vendor.getDetails()).services).toStrictEqual([await periodService.address()])


        // PeriodCrystalOfferRoot
        const periodCrystalOfferRootKeys: KeyPair = await getRandomKeyPair(client)
        const periodCrystalOfferRoot: PeriodCrystalOfferRoot = new PeriodCrystalOfferRoot(
            client,
            periodCrystalOfferRootKeys,
            {
                _offerCode: PeriodCrystalOfferContract.code,
                _accepterCode: PeriodCrystalAccepterContract.code
            })
        await giver.sendTransaction({
            dest: await periodCrystalOfferRoot.address(),
            value: values.giver.periodCrystalOfferRoot
        })
        await periodCrystalOfferRoot.deploy()
        expect(await periodCrystalOfferRoot.accountType()).toBe(AccountType.active)


        // PeriodCrystalOffer
        const periodCrystalOffer: PeriodCrystalOffer = new PeriodCrystalOffer(client, ZERO_KEY_PAIR, {
            _root: await periodCrystalOfferRoot.address(),
            _owner: await periodService.address(),
            _code: PeriodCrystalAccepterContract.code
        })
        await vendorSafeMultisigWallet.sendTransaction({
            dest: await vendor.address(),
            value: values.vendorSafeMultisigWallet.createService.value,
            bounce: false,
            flags: 1,
            payload: await getPayload(
                client,
                VendorContract.abi,
                Vendor.EXTERNAL.callService,
                {
                    service: await periodService.address(),
                    payload: await getPayload(
                        client,
                        PeriodServiceContract.abi,
                        PeriodService.EXTERNAL.createOffer,
                        {
                            root: await periodCrystalOfferRoot.address(),
                            payload: await getPayload(
                                client,
                                PeriodCrystalOfferRootContract.abi,
                                PeriodCrystalOfferRoot.EXTERNAL.create,
                                {
                                    answerId: await periodService.getOnCreateOfferFunction(),
                                    deploymentValue: values.vendorSafeMultisigWallet.createOffer.deploymentValue,
                                    price: 0.0001 * B,
                                    asset: await vendorCrystalAsset.address(),
                                    balanceAfterDeployment: values.vendorSafeMultisigWallet.createOffer.balanceAfterDeployment,
                                    gasReceiver: await vendorSafeMultisigWallet.address()
                                }
                            ),
                            timeout: 20 * 60
                        }
                    ),
                    gasReceiver: await vendorSafeMultisigWallet.address()
                }
            )
        })
        await periodCrystalOfferRoot.waitForTransaction()
        await periodCrystalOffer.waitForTransaction()
        await periodService.waitForTransaction()
        expect(await periodService.accountType()).toBe(AccountType.active)
        expect((await periodService.getDetails()).offers).toStrictEqual([await periodCrystalOffer.address()])

    
        // customerSafeMultisigWallet
        const customerSafeMultisigWalletKeys: KeyPair = await getRandomKeyPair(client)
        const customerSafeMultisigWallet: SafeMultisigWallet = new SafeMultisigWallet(
            client,
            customerSafeMultisigWalletKeys
        )
        await giver.sendTransaction({
            dest: await customerSafeMultisigWallet.address(),
            value: values.giver.customerSafeMultisigWallet
        })
        await customerSafeMultisigWallet.deploy({
            owners: [x0(customerSafeMultisigWalletKeys.public)],
            reqConfirms: 1
        })
        await customerSafeMultisigWallet.sendTransaction({
            dest: await demiurge.address(),
            value: values.customerSafeMultisigWallet.createCustomer.value,
            bounce: true,
            flags: 1,
            payload: await getPayload(
                client,
                DemiurgeContract.abi,
                Demiurge.EXTERNAL.createCustomer,
                {
                    publicKey: ZERO_UINT256,
                    owner: await customerSafeMultisigWallet.address(),
                    deploymentValue: values.customerSafeMultisigWallet.createCustomer.deploymentValue,
                    balanceAfterDeployment: values.customerSafeMultisigWallet.createCustomer.balanceAfterDeployment,
                    gasReceiver: await customerSafeMultisigWallet.address()
                }
            )
        })


        // Customer
        const customer: Customer = new Customer(client, ZERO_KEY_PAIR, {
            _demiurge: await demiurge.address(),
            _owner: await customerSafeMultisigWallet.address()
        })
        await customer.waitForTransaction()
        expect(await customer.accountType()).toBe(AccountType.active)


        // Customer CrystalAsset
        const customerCrystalAsset: CrystalAsset = new CrystalAsset(client, ZERO_KEY_PAIR, {
            _root: await crystalAssetRoot.address(),
            _owner: await customer.address()
        })
        await customerSafeMultisigWallet.sendTransaction({
            dest: await customer.address(),
            value: values.customerSafeMultisigWallet.createAsset.value,
            bounce: false,
            flags: 1,
            payload: await getPayload(
                client,
                CustomerContract.abi,
                Customer.EXTERNAL.createAsset,
                {
                    root: await crystalAssetRoot.address(),
                    payload: await getPayload(
                        client,
                        CrystalAssetRootContract.abi,
                        CrystalAssetRoot.EXTERNAL.create,
                        {
                            answerId: await customer.getOnCreateAssetFunction(),
                            owner: await customer.address(),
                            deploymentValue: values.customerSafeMultisigWallet.createAsset.deploymentValue,
                            balanceAfterDeployment: values.customerSafeMultisigWallet.createAsset.balanceAfterDeployment,
                            gasReceiver: await customerSafeMultisigWallet.address()
                        }
                    ),
                    timeout: 20 * 60
                }
            )
        })
        await crystalAssetRoot.waitForTransaction()
        await customerCrystalAsset.waitForTransaction()
        await customer.waitForTransaction()
        expect(await customerCrystalAsset.accountType()).toBe(AccountType.active)
        expect((await customer.getDetails()).assets).toStrictEqual([await customerCrystalAsset.address()])


        // Subscription
        const periodSubscription: PeriodSubscription = new PeriodSubscription(client, ZERO_KEY_PAIR, {
            _service: await periodService.address(),
            _owner: await customer.address()
        })
        await customerSafeMultisigWallet.sendTransaction({
            dest: await customer.address(),
            value: values.customerSafeMultisigWallet.createSubscription.value,
            bounce: false,
            flags: 1,
            payload: await getPayload(
                client,
                CustomerContract.abi,
                Customer.EXTERNAL.createSubscription,
                {
                    root: await periodService.address(),
                    payload: await getPayload(
                        client,
                        PeriodServiceContract.abi,
                        PeriodService.EXTERNAL.createSubscription,
                        {
                            answerId: await customer.getOnCreateSubscriptionFunction(),
                            deploymentValue: values.customerSafeMultisigWallet.createAsset.deploymentValue,
                            balanceAfterDeployment: values.customerSafeMultisigWallet.createAsset.balanceAfterDeployment,
                            gasReceiver: await customerSafeMultisigWallet.address()
                        }
                    ),
                    timeout: 20 * 60
                }
            )
        })
        await periodService.waitForTransaction()
        await periodSubscription.waitForTransaction()
        await customer.waitForTransaction()
        expect(await periodSubscription.accountType()).toBe(AccountType.active)
        expect((await customer.getDetails()).subscriptions).toStrictEqual(
            [await periodSubscription.address()]
        )


        client.close()
    },
    testTimeout
)