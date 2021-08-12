pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "./interfaces/ICrystalAsset.sol";

contract CrystalAsset is ICrystalAsset {
    /**********
     * STATIC *
     **********/
    address public static _root;
    address public static _owner;
}