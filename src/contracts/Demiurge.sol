pragma ton-solidity >= 0.47.0;

import "interfaces/IDemiurge.sol";
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
contract Demiurge is IDemiurge {
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


    /************
     * EXTERNAL *
     ************/
    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise.
       owner .......... Address of owner if the owner is internal, zero otherwise.
       deployValue .... Value with which the contract will be deployed.
       customer ....... Address of customer contract.
     */
    function createCustomer(uint256 publicKey, address owner, uint128 deployValue)
        override
        external
        view
        onlyOneOwner(publicKey, owner)
        returns(address)
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
       vendor ......... Address of vendor contract.
     */
    function createVendor(uint256 publicKey, address owner, uint128 deployValue)
        override
        external
        view
        onlyOneOwner(publicKey, owner)
        returns(address)
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
    /**
       code .... Code of customer contract.
     */
    function getCustomerCode() public view returns (TvmCell) {
        return _customerCode;
    }

    /**
       code .... Code of vendor contract.
     */
    function getVendorCode() public view returns (TvmCell) {
        return _vendorCode;
    }

    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise.
       owner .......... Address of owner if the owner is internal, zero otherwise.
       customer ....... Address of customer contract.
     */
    function getCustomerAddress(uint256 publicKey, address owner) public view returns (address) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Customer,
            varInit: {
                _demiurge: address(this),
                _owner: owner
            },
            pubkey: publicKey,
            code: _customerCode
        });
        return address(tvm.hash(stateInit));
    }

    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise.
       owner .......... Address of owner if the owner is internal, zero otherwise.
       vendor ......... Address of vendor contract.
     */
    function getVendorAddress(uint256 publicKey, address owner) public view returns (address) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Vendor,
            varInit: {
                _demiurge: address(this),
                _owner: owner
            },
            pubkey: publicKey,
            code: _vendorCode
        });
        return address(tvm.hash(stateInit));
    }
}