pragma ton-solidity >= 0.48.0;

interface IDemiurge {
    /************
     * EXTERNAL *
     ************/
    /*
       publicKey ................. Public key of owner if the owner is external, zero otherwise
       owner ..................... Address of owner if the owner is internal, zero otherwise
       deployValue ............... Value with which the contract will be deployed
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function createVendor(
        uint256 publicKey,
        address owner,
        uint128 deployValue,
        uint128 balanceAfterDeployment,
        address gasReceiver
    )
        external
        view
        returns(address);

    /*
       publicKey ................. Public key of owner if the owner is external, zero otherwise
       owner ..................... Address of owner if the owner is internal, zero otherwise
       deployValue ............... Value with which the contract will be deployed
       balanceAfterDeployment ..... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function createCustomer(
        uint256 publicKey,
        address owner,
        uint128 deployValue,
        uint128 balanceAfterDeployment,
        address gasReceiver
    )
        external
        view
        returns(address);


    /***********
     * GETTERS *
     ***********/
    function getVendorCode() external view responsible returns (TvmCell);

    function getCustomerCode() external view responsible returns (TvmCell);

    /*
       publicKey ...... Public key of owner if the owner is external, zero otherwise
       owner .......... Address of owner if the owner is internal, zero otherwise
     */
    function getVendorAddress(uint256 publicKey, address owner) external view responsible returns (address);

    /*
       publicKey ...... Public key of owner if the owner is external, zero otherwise
       owner .......... Address of owner if the owner is internal, zero otherwise
     */
    function getCustomerAddress(uint256 publicKey, address owner) external view responsible returns (address);
}