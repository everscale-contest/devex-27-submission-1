pragma ton-solidity >= 0.47.0;

import "Customer.sol";
import "Vendor.sol";

/**
 * Contract create Vendor and Customer contracts.
 * Contract stores a list of resources, a list of subscriptions and connections between them.
 *    Vendor - contract of the user who creates the subscriptions.
 *    Customer - contract of the user who subscribes to subscriptions.
 *
 * Errors
 *    100 - Define only public key or owner address
 */
contract Demiurge {
    /*************
     * VARIABLES *
     *************/
    TvmCell private _customerCode;
    TvmCell private _vendorCode;


    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }

    /**
       publicKey .... Public key of owner if the owner is external, zero otherwise.
       owner ........ Address of owner if the owner is internal, zero otherwise.
     */
    modifier onlyOneOwner(uint256 publicKey, address owner) {
        require((publicKey == 0 && owner.value != 0) || (publicKey != 0 && owner.value == 0), 100);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    /**
       customerCode .... Code of customer contract.
       vendorCode ...... Code of vendor contract.
     */
    constructor(TvmCell customerCode, TvmCell vendorCode) public accept {
        _customerCode = customerCode;
        _vendorCode = vendorCode;
    }


    /**********
     * PUBLIC *
     **********/
    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise.
       owner .......... Address of owner if the owner is internal, zero otherwise.
       deployValue .... Value with which the contract will be deployed.
     */
    function createCustomer(uint256 publicKey, address owner, uint128 deployValue)
        public
        view
        onlyOneOwner(publicKey, owner)
        returns(address customer)
    {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Vendor,
            varInit: {
                _demiurge: address(this),
                _owner: owner
            },
            pubkey: publicKey,
            code: _vendorCode
        });

        return new Vendor{
            stateInit: stateInit,
            value: deployValue,
            wid: address(this).wid,
            flag: 1
        }();
    }

    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise.
       owner .......... Address of owner if the owner is internal, zero otherwise.
       deployValue .... Value with which the contract will be deployed.
     */
    function createVendor(uint256 publicKey, address owner, uint128 deployValue)
        public
        view
        onlyOneOwner(publicKey, owner)
        returns(address vendor)
    {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Customer,
            varInit: {
                _demiurge: address(this),
                _owner: owner
            },
            pubkey: publicKey,
            code: _vendorCode
        });

        return new Customer{
            stateInit: stateInit,
            value: deployValue,
            wid: address(this).wid,
            flag: 1
        }();
    }


    /***********
     * GETTERS *
     ***********/
    function getCustomerCode() public view returns (TvmCell code) {
        return _customerCode;
    }

    function getVendorCode() public view returns (TvmCell code) {
        return _vendorCode;
    }

    function getCustomerAddress(uint256 publicKey, address owner) public view returns (address customer) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Customer,
            varInit: {
                _demiurge: address(this),
                _owner: owner
            },
            pubkey: publicKey,
            code: _customerCode
        });
        customer = address(tvm.hash(stateInit));
    }

    function getVendorAddress(uint256 publicKey, address owner) public view returns (address vendor) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Vendor,
            varInit: {
                _demiurge: address(this),
                _owner: owner
            },
            pubkey: publicKey,
            code: _vendorCode
        });
        vendor = address(tvm.hash(stateInit));
    }
}