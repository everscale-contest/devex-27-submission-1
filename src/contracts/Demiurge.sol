pragma ton-solidity >= 0.47.0;

import "interfaces/IDemiurge.sol";
import "Customer.sol";
import "Vendor.sol";

/*
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

    /*
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
    /*
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
    /*
       publicKey ......... Public key of owner if the owner is external, zero otherwise
       owner ............. Address of owner if the owner is internal, zero otherwise
       deployValue ....... Value with which the contract will be deployed
       gasBackAddress .... Receiver the remaining balance after deployment. msg.sender by default
     */
    function createVendor(uint256 publicKey, address owner, uint128 deployValue, address gasBackAddress)
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

        address vendor = new Vendor{
            stateInit: stateInit,
            value: deployValue,
            wid: address(this).wid,
            flag: 1
        }();

        if (gasBackAddress.value != 0)
            gasBackAddress.transfer({ value: 0, flag: 128 });
        else
            msg.sender.transfer({ value: 0, flag: 128 });

        return vendor;
    }

    /*
       publicKey ......... Public key of owner if the owner is external, zero otherwise
       owner ............. Address of owner if the owner is internal, zero otherwise
       deployValue ....... Value with which the contract will be deployed
       gasBackAddress .... Receiver the remaining balance after deployment. msg.sender by default
     */
    function createCustomer(uint256 publicKey, address owner, uint128 deployValue, address gasBackAddress)
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
            code: _customerCode
        });

        address customer = new Customer{
            stateInit: stateInit,
            value: deployValue,
            wid: address(this).wid,
            flag: 1
        }();

        if (gasBackAddress.value != 0)
            gasBackAddress.transfer({ value: 0, flag: 128 });
        else
            msg.sender.transfer({ value: 0, flag: 128 });

        return customer;
    }


    /***********
     * GETTERS *
     ***********/
    function getVendorCode() override external view responsible returns (TvmCell) {
        return { value: 0, bounce: false, flag: 64 } _vendorCode;
    }

    function getCustomerCode() override external view responsible returns (TvmCell) {
        return { value: 0, bounce: false, flag: 64 } _customerCode;
    }

    /*
       publicKey ...... Public key of owner if the owner is external, zero otherwise
       owner .......... Address of owner if the owner is internal, zero otherwise
     */
    function getVendorAddress(uint256 publicKey, address owner) override external view responsible returns (address) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Vendor,
            varInit: {
                _demiurge: address(this),
                _owner: owner
            },
            pubkey: publicKey,
            code: _vendorCode
        });
        return { value: 0, bounce: false, flag: 64 } address(tvm.hash(stateInit));
    }

    /*
       publicKey ...... Public key of owner if the owner is external, zero otherwise
       owner .......... Address of owner if the owner is internal, zero otherwise
     */
    function getCustomerAddress(uint256 publicKey, address owner) override external view responsible returns (address) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Customer,
            varInit: {
                _demiurge: address(this),
                _owner: owner
            },
            pubkey: publicKey,
            code: _customerCode
        });
        return { value: 0, bounce: false, flag: 64 } address(tvm.hash(stateInit));
    }
}