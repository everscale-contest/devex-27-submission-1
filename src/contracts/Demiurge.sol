pragma ton-solidity >= 0.47.0;

import "interfaces/IDemiurge.sol";
import "Customer.sol";
import "Vendor.sol";

/**
   Demiurge creates Vendors and Customers

   Errors
      100 - Define only public key or owner address
 */
contract Demiurge is IDemiurge {
    /*************
     * VARIABLES *
     *************/
    TvmCell private _vendorCode;
    TvmCell private _customerCode;


    /*************
     * MODIFIERS *
     *************/
    modifier accept {
        tvm.accept();
        _;
    }

    /**
       publicKey .... Public key of owner if the owner is external, zero otherwise
       owner ........ Address of owner if the owner is internal, zero otherwise
     */
    modifier onlyOneOwner(uint256 publicKey, address owner) {
        require((publicKey == 0 && owner.value != 0) || (publicKey != 0 && owner.value == 0), 100);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    /**
       vendorCode ...... Code of vendor contract
       customerCode .... Code of customer contract
     */
    constructor(TvmCell vendorCode, TvmCell customerCode) public accept {
        _customerCode = customerCode;
        _vendorCode = vendorCode;
    }


    /************
     * EXTERNAL *
     ************/
    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise
       owner .......... Address of owner if the owner is internal, zero otherwise
       deployValue .... Value with which the contract will be deployed
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

   /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise
       owner .......... Address of owner if the owner is internal, zero otherwise
       deployValue .... Value with which the contract will be deployed
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


    /***********
     * GETTERS *
     ***********/
    function getVendorCode() public view returns (TvmCell) {
        return _vendorCode;
    }

    function getCustomerCode() public view returns (TvmCell) {
        return _customerCode;
    }

    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise
       owner .......... Address of owner if the owner is internal, zero otherwise
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

    /**
       publicKey ...... Public key of owner if the owner is external, zero otherwise
       owner .......... Address of owner if the owner is internal, zero otherwise
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
}