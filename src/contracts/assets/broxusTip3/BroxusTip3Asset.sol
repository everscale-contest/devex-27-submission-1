pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "./interfaces/IBroxusTip3Asset.sol";
import "./interfaces/ITONTokenWallet.sol";
import "./interfaces/ITokenWalletDeployedCallback.sol";
import "./interfaces/IRootTokenContract.sol";
import "../../utils/GasSender.sol";
import "../../utils/GasSender64.sol";
import "../../utils/GasSender128.sol";

/*
  Errors
      100 - Root must be the creator of the contract
      101 - Method for the owner only
      102 - Method for the wallet only
 */
contract BroxusTip3Asset is ITokenWalletDeployedCallback, IBroxusTip3Asset, GasSender, GasSender64, GasSender128 {
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
        root .... Address of TIP-3 root contract
     */
    function notifyWalletDeployed(address root) override external onlyWallet(root) accept {
        ITONTokenWallet(_wallet).setReceiveCallback(address(this), true);
    }

    /*
       Make possible this because setReceiveCallback() method can be aborted for some reasons -
       not enough money for example.
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
        return { value: 0, bounce: false, flag: 64 }(
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
        IRootTokenContract(_tip3Root).deployEmptyWallet{flag: flag}(
            deployEmptyWalletGrams,
            0x0,
            address(this),
            gasReceiver
        );
    }
}