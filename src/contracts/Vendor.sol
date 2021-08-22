pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

import "utils/GasSender128.sol";

/*
   Errors
      100 - Demiurge must be the creator of the contract
 */
contract Vendor is GasSender128 {
    /**********
     * STATIC *
     **********/
    address public static _demiurge;
    address public static _owner;


    /*************
     * MODIFIERS *
     *************/
    modifier demiurgeIsCreator {
        require(_demiurge == msg.sender, 100);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    /*
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    constructor(uint128 balanceAfterDeployment, address gasReceiver) public demiurgeIsCreator {
        tvm.rawReserve(balanceAfterDeployment, 2);
        _sendGas128(gasReceiver);
    }
}