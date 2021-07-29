pragma ton-solidity >= 0.47.0;
pragma AbiHeader expire;

import "./interfaces/ICrystalStorage.sol";

contract CrystalStorage is ICrystalStorage {
    /**********
     * STATIC *
     **********/
    address public static _root;
    address public static _owner;
}