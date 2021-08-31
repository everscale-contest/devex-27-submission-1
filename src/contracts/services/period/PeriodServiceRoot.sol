pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "PeriodService.sol";
import "interfaces/IPeriodServiceRoot.sol";
import "../../utils/GasSender.sol";

contract PeriodServiceRoot is IPeriodServiceRoot, GasSender {
    /**********
     * STATIC *
     **********/
    TvmCell public static _serviceCode;
    TvmCell public static _subscriptionCode;


    /************
     * EXTERNAL *
     ************/
    /*
       deploymentValue ........... Value with which the contract will be deployed
       periodDuration ............ Subscription period duration
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function create(
        uint128 deploymentValue,
        uint32  periodDuration,
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
            contr: PeriodService,
            varInit: {
                _root: address(this),
                _owner: msg.sender,
                _subscriptionCode: _subscriptionCode
            },
            pubkey: 0,
            code: _serviceCode
        });

        return { value: 0, bounce: false, flag: 128 } (
            new PeriodService{
                stateInit: stateInit,
                value: deploymentValue,
                wid: address(this).wid,
                flag: 1
            } (periodDuration, balanceAfterDeployment, gasReceiver),
            gasReceiver
        );
    }


    /***********
     * GETTERS *
     ***********/
    function getServiceCode() override external view responsible returns (TvmCell) {
        return { value: 0, bounce: false, flag: 64 } _serviceCode;
    }

    function getSubscriptionCode() override external view responsible returns (TvmCell) {
        return { value: 0, bounce: false, flag: 64 } _subscriptionCode;
    }

    /*
       owner .... Address of owner
     */
    function getServiceAddress(address owner) override external view responsible returns (address) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: PeriodService,
            varInit: {
                _root: address(this),
                _owner: msg.sender,
                _subscriptionCode: _subscriptionCode
            },
            pubkey: 0,
            code: _serviceCode
        });
        return { value: 0, bounce: false, flag: 64 } address(tvm.hash(stateInit));
    }
}