pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "../../../src/contracts/assets/crystal/interfaces/ICrystalAssetRoot.sol";

contract CrystalAssetOwner {
    /*************
     * VARIABLES *
     *************/
    address private _assetAddress;


    /************
     * EXTERNAL *
     ************/
    /*
       value ............. How much crystals send total
       root .............. Address of CrystalAsset root
       deployValue ....... How much crystals send to wallet on deployment
     */
    function create(uint128 value, address root, uint128 deployValue) public pure {
        tvm.accept();
        ICrystalAssetRoot(root).create{value: value, callback: CrystalAssetOwner.onCreate}(
            address(this),
            deployValue
        );
    }

    /*
       assetAddress .... Address of asset
     */
    function onCreate(address assetAddress) external {
        _assetAddress = assetAddress;
    }


    /***********
     * GETTERS *
     ***********/
    function getAssetAddress() public view returns(address) {
        return _assetAddress;
    }
}