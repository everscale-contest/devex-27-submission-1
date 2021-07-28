pragma ton-solidity >= 0.47.0;

interface IDemiurge {
    /*
       publicKey ......... Public key of owner if the owner is external, zero otherwise
       owner ............. Address of owner if the owner is internal, zero otherwise
       deployValue ....... Value with which the contract will be deployed
       gasBackAddress .... Receiver the remaining balance after deployment. msg.sender by default
     */
    function createVendor(uint256 publicKey, address owner, uint128 deployValue, address gasBackAddress)
        external
        view
        returns(address);

    /*
       publicKey ......... Public key of owner if the owner is external, zero otherwise
       owner ............. Address of owner if the owner is internal, zero otherwise
       deployValue ....... Value with which the contract will be deployed
       gasBackAddress .... Receiver the remaining balance after deployment. msg.sender by default
     */
    function createCustomer(uint256 publicKey, address owner, uint128 deployValue, address gasBackAddress)
        external
        view
        returns(address);

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