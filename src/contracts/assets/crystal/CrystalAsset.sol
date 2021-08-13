pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "./interfaces/ICrystalAsset.sol";

/*
  Errors
      100 - Root must be the creator of the contract
 */
contract CrystalAsset is ICrystalAsset {
    /**********
     * STATIC *
     **********/
    address public static _root;
    address public static _owner;


    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }

    modifier rootIsCreator {
        require(_root == msg.sender, 100);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    constructor() public rootIsCreator accept {}


    /************
     * EXTERNAL *
     ************/
    /*
       root ....... Address of root contract
       owner ...... Address of owner contract
       balance .... How much crystals on contract balance
     */
    function getDetails() override external view responsible returns(address root, address owner, uint128 balance) {
        root = _root;
        owner = _owner;
        balance = address(this).balance;
    }
}