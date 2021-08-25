pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "./interfaces/ICrystalAsset.sol";
import "./interfaces/ICrystalAssetInternal.sol";
import "./interfaces/ICrystalAssetTransfer.sol";
import "./interfaces/ICrystalAssetOwned.sol";
import "../../interfaces/IVendorToService.sol";
import "../../interfaces/IServiceToOffer.sol";
import "../../utils/GasSender.sol";
import "../../utils/GasSender64.sol";
import "../../utils/GasSender128.sol";

/*
  Errors
      100 - Root must be the creator of the contract
      101 - Method for the owner only
 */
contract CrystalAsset is
    ICrystalAsset,
    ICrystalAssetOwned,
    ICrystalAssetTransfer,
    ICrystalAssetInternal,
    GasSender,
    GasSender64,
    GasSender128
{
    /**********
     * STATIC *
     **********/
    address public static _root;
    address public static _owner;


    /*************
     * MODIFIERS *
     *************/
    modifier rootIsCreator {
        require(msg.sender == _root, 100);
        _;
    }

    modifier onlyOwner {
        require(msg.sender == _owner, 101);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    /*
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    constructor(uint128 balanceAfterDeployment, address gasReceiver) public rootIsCreator {
        tvm.rawReserve(balanceAfterDeployment, 2);
        _sendGas128(gasReceiver);
    }


    /************
     * EXTERNAL *
     ************/
    /*
       to ............. Destination asset address
       value .......... How much grams to transfer from
       gasReceiver .... Remaining balance receiver
       payload ........ Information for destination contract
     */
    function transfer(address to, uint128 value, address gasReceiver, TvmCell payload)
        override
        external
        view
        onlyOwner
    {
        uint128 availableValue = address(this).balance - msg.value;

        // Returns gas if balance not enough
        if (value == 0 || value > availableValue) {
            _sendGas64(gasReceiver);
            return;
        }

        tvm.rawReserve(availableValue - value, 2);
        ICrystalAssetInternal(to).internalTransfer { flag: 128 } (value, gasReceiver, payload);
    }

    /*
       Method decode and check data in payload.
       It's like scanning baggage at an airport.
       The baggage is not yours, but you can check what is in it.

       value .......... How much grams to transfer from
       gasReceiver .... Remaining balance receiver
       payload ........ Information for destination contract
     */
    function internalTransfer(uint128 value, address gasReceiver, TvmCell payload) override external view {
        // Vendor
        address service;
        TvmCell servicePayload;
        address gasReceiverInVendor;
        TvmSlice vendorSlice = payload.toSlice();
        vendorSlice.decode(uint32);
        (
            service,
            servicePayload,
            gasReceiverInVendor
        ) = vendorSlice.decodeFunctionParams(IVendorToService.toService);

        // Service
        address offer;
        TvmCell offerPayload;
        address gasReceiverInService;
        TvmSlice serviceSlice = servicePayload.toSlice();
        serviceSlice.decode(uint32);
        (
            offer,
            offerPayload,
            gasReceiverInService
        ) = serviceSlice.decodeFunctionParams(IServiceToOffer.toOffer);

        // Offer
        TvmSlice offerSlice = offerPayload.toSlice();
        offerSlice.decode(uint32); // functionId
        offerSlice.decode(uint32); // assetBits
        address offerAsset = offerSlice.decode(address);
        uint128 offerValue = offerSlice.decode(uint128);

        // Return gas if data not valid
        if (offerAsset != address(this) || offerValue != value) {
            _sendGas64(gasReceiver);
            return;
        }

        // Transfer payload
        tvm.rawReserve(address(this).balance - msg.value + value, 2);
        _owner.transfer(0, true, 128, payload);
    }

    /*
       to ............. Destination asset address
       value .......... How much grams to transfer from
       bounce ....... * B.. Bounce flag. Set true if need to transfer grams to existing account
       gasReceiver .... Remaining balance receiver
     */
    function withdraw(address to, uint128 value, bool bounce, address gasReceiver)
        override
        external
        view
        onlyOwner
    {
        uint128 availableValue = address(this).balance - msg.value;

        // Returns gas if balance not enough
        if (value == 0 || value > availableValue) {
            _sendGas64(gasReceiver);
            return;
        }

        tvm.rawReserve(availableValue - value, 2);
        to.transfer(value, bounce);
        _sendGas128(gasReceiver);
    }

    /*
       to ............. Destination asset address
       value .......... How much grams to transfer from
       gasReceiver .... Remaining balance receiver
     */
    function withdrawAll(address to, bool bounce, address gasReceiver)
        override
        external
        view
        onlyOwner
    {
        uint128 availableValue = address(this).balance - msg.value;

        // Returns gas if balance = 0
        if (availableValue == 0) {
            _sendGas64(gasReceiver);
            return;
        }

        to.transfer(availableValue, bounce);
        _sendGas128(gasReceiver);
    }


    /***********
     * GETTERS *
     ***********/
    /*
       root ....... Address of root contract
       owner ...... Address of owner contract
       balance .... How much crystals on contract balance
     */
    function getDetails() override external view responsible returns(address root, address owner, uint128 balance) {
        return { value: 0, bounce: false, flag: 64 } (
            _root,
            _owner,
            address(this).balance - msg.value
        );
    }
}