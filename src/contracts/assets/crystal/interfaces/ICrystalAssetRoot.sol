pragma ton-solidity >= 0.48.0;

interface ICrystalAssetRoot {
    /************
     * EXTERNAL *
     ************/
    /*
       owner ..................... Address of asset owner
       deploymentValue ........... How much crystals send to asset on deployment
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function create(address owner, uint128 deploymentValue, uint128 balanceAfterDeployment, address gasReceiver)
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
       owner .... Address of contract owner
     */
    function getAddress(address owner) external view responsible returns(address);
}