pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

interface IPeriodServiceRoot {
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
        external
        view
        responsible
        returns(
            address subscription,
            address receiver
        );


    /***********
     * GETTERS *
     ***********/
    function getServiceCode() external view responsible returns (TvmCell);

    function getSubscriptionCode() external view responsible returns (TvmCell);

    /*
       owner .......... Address of owner
     */
    function getServiceAddress(address owner) external view responsible returns (address);
}