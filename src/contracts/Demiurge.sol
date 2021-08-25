pragma ton-solidity >= 0.48.0;

import "interfaces/IDemiurge.sol";
import "utils/GasSender.sol";
import "utils/GasSender128.sol";
import "Customer.sol";
import "Vendor.sol";

/*
   Errors
      100 - Define only public key or owner address
 */
contract Demiurge is IDemiurge, GasSender, GasSender128 {
    /**********
     * STATIC *
     **********/
    TvmCell public static _vendorCode;
    TvmCell public static _customerCode;


    /*************
     * MODIFIERS *
     *************/
    /*
       publicKey .... Public key of owner if the owner is external, zero otherwise
       owner ........ Address of owner if the owner is internal, zero otherwise
     */
    modifier onlyOneOwner(uint256 publicKey, address owner) {
        require((publicKey == 0 && owner.value != 0) || (publicKey != 0 && owner.value == 0), 100);
        _;
    }


    /************
     * EXTERNAL *
     ************/
    /*
       publicKey ................. Public key of owner if the owner is external, zero otherwise
       owner ..................... Address of owner if the owner is internal, zero otherwise
       deployValue ............... Value with which the contract will be deployed
       balanceAfterDeployment ..... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function createVendor(
        uint256 publicKey,
        address owner,
        uint128 deployValue,
        uint128 balanceAfterDeployment,
        address gasReceiver
    )
        override
        external
        view
        onlyOneOwner(publicKey, owner)
        returns(address)
    {
        _gasReserve();
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
        } (balanceAfterDeployment, gasReceiver);
        _sendGas128(gasReceiver);
        return vendor;
    }

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
        override
        external
        view
        onlyOneOwner(publicKey, owner)
        returns(address)
    {
        _gasReserve();
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
        } (balanceAfterDeployment, gasReceiver);
        _sendGas128(gasReceiver);
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