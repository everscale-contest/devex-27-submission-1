pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "../../../src/contracts/assets/broxusTip3/interfaces/IBroxusTip3AssetRoot.sol";
import "../../../src/contracts/assets/broxusTip3/interfaces/IBroxusTip3Asset.sol";
import "../../../src/contracts/interfaces/IVendorToService.sol";

contract BroxusTip3AssetOwner is IVendorToService {
    /*************
     * VARIABLES *
     *************/
    address private _asset;
    address private _gasReceiver;
    address private _service;
    TvmCell private _payload;


    /************
     * EXTERNAL *
     ************/
    /*
       root ...................... Address of asset root contract
       value ..................... How much crystals send total
       tip3Root .................. Address of TIP-3 root contract
       deployValue ............... How much crystals send to asset on deployment
       balanceAfterDeployment .... How much crystals will remain after deployment
       walletAddress ............. Address of TIP-3 wallet to be deployed
       deployEmptyWalletGrams .... How much crystals will remain on TIP-3 wallet after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function create(
        address root,
        uint128 value,
        address tip3Root,
        uint128 deployValue,
        uint128 balanceAfterDeployment,
        address walletAddress,
        uint128 deployEmptyWalletGrams,
        address gasReceiver
    )
        public pure
    {
        tvm.accept();
        IBroxusTip3AssetRoot(root).create{value: value, callback: BroxusTip3AssetOwner.onCreate}(
            tip3Root,
            deployValue,
            balanceAfterDeployment,
            walletAddress,
            deployEmptyWalletGrams,
            gasReceiver
        );
    }

    function setReceiveCallback(uint128 value, address gasReceiver) public {
        tvm.accept();
        IBroxusTip3Asset(_asset).setReceiveCallback{ value: value, flag: 64 }(gasReceiver);
    }

    /*
       assetAddress .... Address of asset
     */
    function onCreate(address asset, address gasReceiver) external {
        _asset = asset;
        _gasReceiver = gasReceiver;
    }

    /*
       service ........ Address of service contract
       payload ........ Payload for service contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function toService(address service, TvmCell payload, address gasReceiver) override external {
        _service = service;
        _payload = payload;
        _gasReceiver = gasReceiver;
    }


    /***********
     * GETTERS *
     ***********/
    function getInfo() public view returns(address asset, address gasReceiver, address service, TvmCell payload) {
        asset = _asset;
        gasReceiver = _gasReceiver;
        service = _service;
        payload = _payload;
    }
}