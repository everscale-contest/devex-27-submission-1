pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "../../../src/contracts/assets/broxusTip3/interfaces/IRootTokenContract.sol";

contract RootTokenContractOwner {
    /*************
     * VARIABLES *
     *************/
    address private _root;


    /***************
     * CONSTRUCTOR *
     ***************/
    /*
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    constructor(address root) public {
        tvm.accept();
        _root = root;
    }


    /************
     * EXTERNAL *
     ************/
    /*
       Mint tokens for any user
       tokens .... How much tokens to mint
       to ........ Receiver token wallet address
     */
    function mint(uint128 tokens, address to) public view {
        IRootTokenContract(_root).mint{flag: 64}(tokens, to);
    }
}