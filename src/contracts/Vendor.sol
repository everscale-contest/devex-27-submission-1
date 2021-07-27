pragma ton-solidity >= 0.47.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

/**
   Created by Demiurge. Manages Resources. Receives request from Resource and redirect to Service

   Errors
      100 - Demiurge must be the creator of the contract
 */
contract Vendor {
    /**********
     * STATIC *
     **********/
    address public static _demiurge;
    address public static _owner;


    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }

    modifier demiurgeIsCreator {
        require(_demiurge == msg.sender, 100);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    constructor() public demiurgeIsCreator accept {}
}