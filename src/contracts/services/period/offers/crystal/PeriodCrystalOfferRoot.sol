pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "PeriodCrystalOffer.sol";
import "interfaces/IPeriodCrystalOfferRoot.sol";
import "../../../../utils/GasSender.sol";

contract PeriodCrystalOfferRoot is IPeriodCrystalOfferRoot, GasSender {
    /**********
     * STATIC *
     **********/
    TvmCell public static _offerCode;
    TvmCell public static _accepterCode;


    /************
     * EXTERNAL *
     ************/
    /*
       deploymentValue ........... Value with which the contract will be deployed
       price ..................... Price of subscription
       asset ..................... Address of asset to which the money is received
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function create(
        uint128 deploymentValue,
        uint128 price,
        address asset,
        uint128 balanceAfterDeployment,
        address gasReceiver
    )
        override
        external
        view
        responsible
        returns(
            address subscription,
            address receiver
        )
    {
        _gasReserve();
        TvmCell stateInit = tvm.buildStateInit({
            contr: PeriodCrystalOffer,
            varInit: {
                _root: address(this),
                _owner: msg.sender,
                _code: _accepterCode
            },
            pubkey: 0,
            code: _offerCode
        });

        return { value: 0, bounce: false, flag: 128 } (
            new PeriodCrystalOffer{
                stateInit: stateInit,
                value: deploymentValue,
                wid: address(this).wid,
                flag: 1
            } (price, asset, balanceAfterDeployment, gasReceiver),
            gasReceiver
        );
    }


    /***********
     * GETTERS *
     ***********/
    function getOfferCode() override external view responsible returns (TvmCell) {
        return { value: 0, bounce: false, flag: 64 } _offerCode;
    }

    /*
       owner .... Address of owner
     */
    function getOfferAddress(address owner) override external view responsible returns (address) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: PeriodCrystalOffer,
            varInit: {
                _root: address(this),
                _owner: msg.sender,
                _code: _accepterCode
            },
            pubkey: 0,
            code: _offerCode
        });
        return { value: 0, bounce: false, flag: 64 } address(tvm.hash(stateInit));
    }
}