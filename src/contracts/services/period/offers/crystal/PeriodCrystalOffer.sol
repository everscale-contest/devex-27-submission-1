pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "interfaces/IPeriodCrystalOffer.sol";
import "../../../../utils/GasSender128.sol";

/*
   Errors
      100 - Root must be the creator of the contract
 */
contract PeriodCrystalOffer is IPeriodCrystalOffer, GasSender128 {
    /**********
     * STATIC *
     **********/
    address public static _root;
    address public static _owner;
    TvmCell public static _code;


    /*************
     * VARIABLES *
     *************/
    uint128 private _price;
    address private _asset;


    /*************
     * MODIFIERS *
     *************/
    modifier rootIsCreator {
        require(msg.sender == _root, 100);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    /*
       price ..................... Price of subscription
       asset ..................... Address of asset to which the money is received
       periodDuration ............ Time in seconds for which the subscription is renewed
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    constructor(
        uint128 price,
        address asset,
        uint128 balanceAfterDeployment,
        address gasReceiver
    )
        public rootIsCreator
    {
        tvm.rawReserve(balanceAfterDeployment, 2);
        _price = price;
        _asset = asset;
        _sendGas128(gasReceiver);
    }


    /***********
     * GETTERS *
     ***********/
    /*
       root ..... Address of root contract
       owner .... Address of owner contract
       price .... Price of subscription
       asset .... Address of asset to which the money is received
     */
    function getDetails() override external view responsible returns(
            address root,
            address owner,
            uint128 price,
            address asset
        )
    {
        return { value: 0, bounce: false, flag: 64 } (
            _root,
            _owner,
            _price,
            _asset
        );
    }

    function getCode() override external view responsible returns(TvmCell) {
        return { value: 0, bounce: false, flag: 64 } _code;
    }
}