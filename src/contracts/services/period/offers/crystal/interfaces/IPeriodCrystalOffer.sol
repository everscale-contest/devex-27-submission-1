pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

interface IPeriodCrystalOffer {
    /***********
     * GETTERS *
     ***********/
    /*
       root ..... Address of root contract
       owner .... Address of owner contract
       price .... Price of subscription
       asset .... Address of asset to which the money is received
     */
    function getDetails() external view responsible returns(
            address root,
            address owner,
            uint128 price,
            address asset
        );

    function getCode() external view responsible returns(TvmCell);
}