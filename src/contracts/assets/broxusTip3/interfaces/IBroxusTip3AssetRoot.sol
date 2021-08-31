pragma ton-solidity >= 0.48.0;

interface IBroxusTip3AssetRoot {
    /************
     * EXTERNAL *
     ************/
    /*
       tip3Root .................. Address of TIP-3 root contract
       deploymentValue .......... How much crystals send to asset on deployment
       balanceAfterDeployment .... How much crystals will remain after deployment
       walletAddress ............. Address of TIP-3 wallet to be deployed
       deployEmptyWalletGrams .... How much crystals will remain on TIP-3 wallet after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function create(
        address tip3Root,
        uint128 deploymentValue,
        uint128 balanceAfterDeployment,
        address walletAddress,
        uint128 deployEmptyWalletGrams,
        address gasReceiver
    )
        external
        view
        responsible
        returns(
            address asset,
            address receiver
        );

    /***********
     * GETTERS *
     ***********/
    function getCode() external view responsible returns(TvmCell);

    /*
       owner ....... Address of contract owner
       tip3Root .... Address of TIP-3 root contract
     */
    function getAddress(address owner, address tip3Root) external view responsible returns(address);
}