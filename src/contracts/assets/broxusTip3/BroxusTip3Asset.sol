pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "./interfaces/IBroxusTip3Asset.sol";
import "./interfaces/IBroxusTip3AssetTransfer.sol";
import "./interfaces/ITONTokenWallet.sol";
import "./interfaces/ITokensReceivedCallback.sol";
import "./interfaces/IRootTokenContract.sol";
import "../../interfaces/IVendorToService.sol";
import "../../interfaces/IServiceToOffer.sol";
import "../../utils/GasSender.sol";
import "../../utils/GasSender64.sol";
import "../../utils/GasSender128.sol";

/*
  Errors
      100 - Root must be the creator of the contract
      101 - Method for the owner only
      102 - Method for the wallet only
 */
contract BroxusTip3Asset is
    ITokensReceivedCallback,
    IBroxusTip3Asset,
    IBroxusTip3AssetTransfer,
    GasSender,
    GasSender64,
    GasSender128
{
    /**********
     * STATIC *
     **********/
    address public static _root;
    address public static _owner;
    address public static _tip3Root;


    /*************
     * VARIABLES *
     *************/
    address private _wallet;


    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }

    modifier rootIsCreator {
        require(msg.sender == _root, 100);
        _;
    }

    modifier onlyOwner {
        require(msg.sender == _owner, 101);
        _;
    }

    modifier onlyWallet(address root) {
        require(msg.sender == _wallet && root == _tip3Root, 102);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    /*
       balanceAfterDeployment .... How much crystals will remain after deployment
       walletAddress ............. Address of TIP-3 wallet to be deployed
       deployEmptyWalletGrams .... How much crystals will remain on TIP-3 wallet after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    constructor(
        uint128 balanceAfterDeployment,
        address walletAddress,
        uint128 deployEmptyWalletGrams,
        address gasReceiver
    )
        public rootIsCreator
    {
        tvm.rawReserve(balanceAfterDeployment, 2);
        _wallet = walletAddress;
        _deployWallet(deployEmptyWalletGrams, gasReceiver, 128);
    }


    /************
     * EXTERNAL *
     ************/
    /*
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function setReceiveCallback(address gasReceiver) override external onlyOwner accept {
        ITONTokenWallet(_wallet).setReceiveCallback(address(this), true);
        _sendGas64(gasReceiver);
    }

    /*
       Make possible this because some one can deploy asset with wrong wallet address.
       value .......... Address of TIP-3 wallet to be deployed
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function setWallet(address wallet, address gasReceiver) override external onlyOwner {
        _wallet = wallet;
        _sendGas64(gasReceiver);
    }

    /*
       Make possible this because some one can deploy asset with wrong wallet address.
       deployEmptyWalletGrams .... How much crystals will remain on TIP-3 wallet after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function deployWallet(uint128 deployEmptyWalletGrams, address gasReceiver) override external onlyOwner {
        _deployWallet(deployEmptyWalletGrams, gasReceiver, 64);
    }

    /*
       to ............. Address of TIP-3 wallet
       tokens ......... How much crystals send to wallet
       gasReceiver .... Remaining balance receiver. msg.sender by default
       payload ........ Information for destination contract
     */
    function transfer(
        address to,
        uint128 tokens,
        address gasReceiver,
        TvmCell payload
    ) override external {
        ITONTokenWallet(_wallet).transfer { flag: 64 } (to, tokens, 0, gasReceiver, true, payload);
    }

    /*
       Method decode and check data in payload.
       It's like scanning baggage at an airport.
       The baggage is not yours, but you can check what is in it.

       ITokensReceivedCallback
     */
    function tokensReceivedCallback(
        address token_wallet,
        address token_root,
        uint128 amount,
        uint256 sender_public_key,
        address sender_address,
        address sender_wallet,
        address original_gas_to,
        uint128 updated_balance,
        TvmCell payload
    ) override external {
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
        if (offerAsset != address(this) || offerValue != amount) {
            _sendGas64(original_gas_to);
            return;
        }

        // Transfer payload
        _owner.transfer(0, true, 64, payload);
    }


    /***********
     * GETTERS *
     ***********/
    /*
       root ....... Address of root contract
       owner ...... Address of owner contract
       balance .... How much crystals on contract balance
     */
    function getDetails() override external view responsible returns(
            address root,
            address owner,
            address tip3Root,
            address wallet
        )
    {
        return { value: 0, bounce: false, flag: 64 } (
            _root,
            _owner,
            _tip3Root,
            _wallet
        );
    }


    /***********
     * PRIVATE *
     ***********/
    /*
       deployEmptyWalletGrams .... How much crystals will remain on TIP-3 wallet after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
       flags ..................... Sets flag which used to send the internal outbound message.
     */
    function _deployWallet(uint128 deployEmptyWalletGrams, address gasReceiver, uint16 flag) private {
        IRootTokenContract(_tip3Root).deployEmptyWallet { flag: flag } (
            deployEmptyWalletGrams,
            0x0,
            address(this),
            gasReceiver
        );
    }
}