pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "./CrystalAsset.sol";
import "./interfaces/ICrystalAssetRoot.sol";

contract CrystalAssetRoot is ICrystalAssetRoot {
    /**********
    * STATIC *
    **********/
    TvmCell public static _code;


    /************
     * EXTERNAL *
     ************/
    /*
       owner .......... Address of asset owner
       deployValue .... How much crystals send to wallet on deployment
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function create(address owner, uint128 deployValue, address gasReceiver)
        override
        external
        view
        responsible
        returns(
            address asset,
            address receiver
        )
    {
        tvm.rawReserve(address(this).balance - msg.value, 2);
        TvmCell stateInit = tvm.buildStateInit({
            contr: CrystalAsset,
            varInit: {
                _root: address(this),
                _owner: owner
            },
            pubkey: 0,
            code: _code
        });
        return { value: 0, bounce: false, flag: 128 } (
            new CrystalAsset {
                stateInit: stateInit,
                value: deployValue,
                wid: address(this).wid,
                flag: 1
            }(),
            gasReceiver
        );
    }


    /***********
     * GETTERS *
     ***********/
    function getCode() override external view responsible returns(TvmCell) {
        return { value: 0, bounce: false, flag: 64 } _code;
    }

    /*
       owner .... Address of contract owner
     */
    function getAddress(address owner) override external view responsible returns(address) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: CrystalAsset,
            varInit: {
                _root: address(this),
                _owner: owner
            },
            pubkey: 0,
            code: _code
        });
        return { value: 0, bounce: false, flag: 64 } address(tvm.hash(stateInit));
    }
}