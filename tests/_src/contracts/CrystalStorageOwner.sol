pragma ton-solidity >= 0.47.0;
pragma AbiHeader expire;

import "../../../src/contracts/storages/crystal/interfaces/ICrystalStorageRoot.sol";

contract CrystalStorageOwner {
    /*************
     * VARIABLES *
     *************/
    address private _storageAddress;


    /************
     * EXTERNAL *
     ************/
    /*
       value ............. How much crystals send total
       root .............. Address of CrystalStorage root
       deployValue ....... How much crystals send to wallet on deployment
     */
    function create(uint128 value, address root, uint128 deployValue) public pure {
        tvm.accept();
        ICrystalStorageRoot(root).create{value: value, callback: CrystalStorageOwner.onCreate}(
            address(this),
            deployValue
        );
    }

    /*
       storageAddress .... Address of storage
     */
    function onCreate(address storageAddress) external {
        _storageAddress = storageAddress;
    }


    /***********
     * GETTERS *
     ***********/
    function getStorageAddress() public view returns(address) {
        return _storageAddress;
    }
}