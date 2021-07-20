pragma ton-solidity >= 0.44.0;

interface IDemiurge {
    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise.
       owner .......... Address of owner if the owner is internal, zero otherwise.
       deployValue .... Value with which the contract will be deployed.
       customer ....... Address of customer contract.
     */
    function createCustomer(uint256 publicKey, address owner, uint128 deployValue)
        external
        view
        returns(address customer);

    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise.
       owner .......... Address of owner if the owner is internal, zero otherwise.
       deployValue .... Value with which the contract will be deployed.
       vendor ......... Address of vendor contract.
     */
    function createVendor(uint256 publicKey, address owner, uint128 deployValue)
        external
        view
        returns(address vendor);
}