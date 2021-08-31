pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

interface IPeriodCrystalOfferRoot {
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
    function getOfferCode() external view responsible returns (TvmCell);

    /*
       owner .... Address of owner
     */
    function getOfferAddress(address owner) external view responsible returns (address);
}