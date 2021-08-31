pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "../../utils/GasSender128.sol";

/*
   Errors
      100 - Root must be the creator of the contract
 */
contract PeriodSubscription is GasSender128 {
    /**********
     * STATIC *
     **********/
    address public static _service;
    address public static _owner;


    /*************
     * VARIABLES *
     *************/
    uint32 private _periods;
    uint32 private _expireAt;


    /*************
     * MODIFIERS *
     *************/
    modifier serviceIsCreator {
        require(msg.sender == _service, 100);
        _;
    }


    /*
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    constructor(uint128 balanceAfterDeployment, address gasReceiver) public serviceIsCreator {
        tvm.rawReserve(balanceAfterDeployment, 2);
        _sendGas128(gasReceiver);
    }
}