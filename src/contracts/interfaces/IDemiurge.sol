pragma ton-solidity >= 0.47.0;

interface IDemiurge {
    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise.
       owner .......... Address of owner if the owner is internal, zero otherwise.
       deployValue .... Value with which the contract will be deployed.
     */
    function createCustomer(uint256 publicKey, address owner, uint128 deployValue)
        external
        view
        returns(address);

    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise.
       owner .......... Address of owner if the owner is internal, zero otherwise.
       deployValue .... Value with which the contract will be deployed.
     */
    function createVendor(uint256 publicKey, address owner, uint128 deployValue)
        external
        view
        returns(address);
}