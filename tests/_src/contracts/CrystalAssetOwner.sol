pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "../../../src/contracts/assets/crystal/interfaces/ICrystalAssetRoot.sol";

contract CrystalAssetOwner {
    /*************
     * VARIABLES *
     *************/
    address private _asset;
    address private _gasReceiver;


    /************
     * EXTERNAL *
     ************/
    /*
       value .......... How much crystals send total
       root ........... Address of CrystalAsset root
       deployValue .... How much crystals send to wallet on deployment
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function create(uint128 value, address root, uint128 deployValue, address gasReceiver) public pure {
        tvm.accept();
        ICrystalAssetRoot(root).create{value: value, callback: CrystalAssetOwner.onCreate}(
            address(this),
            deployValue,
            gasReceiver
        );
    }

    /*
       assetAddress .... Address of asset
     */
    function onCreate(address asset, address gasReceiver) external {
        _asset = asset;
        _gasReceiver = gasReceiver;
    }


    /***********
     * GETTERS *
     ***********/
    function getInfo() public view returns(address asset, address gasReceiver) {
        asset = _asset;
        gasReceiver = _gasReceiver;
    }
}