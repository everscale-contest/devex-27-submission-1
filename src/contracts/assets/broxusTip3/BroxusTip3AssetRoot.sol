pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "./BroxusTip3Asset.sol";
import "./interfaces/IBroxusTip3AssetRoot.sol";

contract BroxusTip3AssetRoot is IBroxusTip3AssetRoot {
    /**********
     * STATIC *
     **********/
    TvmCell public static _code;


    /************
     * EXTERNAL *
     ************/
    /*
       owner ..................... Address of asset owner
       tip3Root .................. Address of TIP-3 root contract
       deployValue ............... How much crystals send to asset on deployment
       balanceAfterDeployment .... How much crystals will remain after deployment
       walletAddress ............. Address of TIP-3 wallet to be deployed
       deployEmptyWalletGrams .... How much crystals will remain on TIP-3 wallet after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function create(
        address tip3Root,
        uint128 deployValue,
        uint128 balanceAfterDeployment,
        address walletAddress,
        uint128 deployEmptyWalletGrams,
        address gasReceiver
    )
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
            contr: BroxusTip3Asset,
            varInit: {
                _root: address(this),
                _owner: msg.sender,
                _tip3Root: tip3Root
            },
            pubkey: 0,
            code: _code
        });
        return { value: 0, bounce: false, flag: 128 } (
            new BroxusTip3Asset {
                stateInit: stateInit,
                value: deployValue,
                wid: address(this).wid,
                flag: 1
            } (balanceAfterDeployment, walletAddress, deployEmptyWalletGrams, gasReceiver),
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
       owner ....... Address of contract owner
       tip3Root .... Address of TIP-3 root contract
     */
    function getAddress(address owner, address tip3Root) override external view responsible returns(address) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: BroxusTip3Asset,
            varInit: {
                _root: address(this),
                _owner: owner,
                _tip3Root: tip3Root
            },
            pubkey: 0,
            code: _code
        });
        return { value: 0, bounce: false, flag: 64 } address(tvm.hash(stateInit));
    }
}