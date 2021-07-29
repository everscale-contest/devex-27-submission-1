pragma ton-solidity >= 0.47.0;
pragma AbiHeader expire;

import "./CrystalStorage.sol";
import "./interfaces/ICrystalStorageRoot.sol";

contract CrystalStorageRoot is ICrystalStorageRoot {
    /**********
    * STATIC *
    **********/
    TvmCell public static _code;


    /************
     * EXTERNAL *
     ************/
    /*
       owner ............. Address of storage owner
       deployValue ....... How much crystals send to wallet on deployment
     */
    function create(address owner, uint128 deployValue)
        override
        external
        view
        responsible
        returns(address)
    {
        tvm.rawReserve(address(this).balance - msg.value, 2);
        TvmCell stateInit = tvm.buildStateInit({
            contr: CrystalStorage,
            varInit: {
                _root: address(this),
                _owner: owner
            },
            pubkey: 0,
            code: _code
        });
        return { value: 0, bounce: false, flag: 128 } new CrystalStorage{
            stateInit: stateInit,
            value: deployValue,
            wid: address(this).wid,
            flag: 1
        }();
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
            contr: CrystalStorage,
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