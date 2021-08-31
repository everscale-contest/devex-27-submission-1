pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

import "interfaces/ICustomer.sol";
import "utils/GasSender128.sol";
import "utils/GasSender64.sol";

/*
   Errors
      100 - Demiurge must be the creator of the contract
      101 - Define only public key or owner address
      102 - Method for the owner only
      103 - Method for the asset root only
      104 - Method for the service root only
 */
contract Customer is ICustomer, GasSender128, GasSender64 {
    /**********
     * STATIC *
     **********/
    address public static _demiurge;
    address public static _owner;


    /*************
     * VARIABLES *
     *************/
    mapping(address => Sender) _assetRoots;
    mapping(address => Sender) _serviceRoots;
    mapping(address => bool) _assets;
    mapping(address => bool) _services;


    /*************
     * MODIFIERS *
     *************/
    modifier demiurgeIsCreator {
        require(msg.sender == _demiurge, 100);
        _;
    }

    modifier onlyOneOwner() {
        require((tvm.pubkey() == 0 && _owner.value != 0) || (tvm.pubkey() != 0 && _owner.value == 0), 101);
        _;
    }

    modifier onlyOwner {
        require((msg.isInternal && msg.sender == _owner) || (msg.isExternal && msg.pubkey() == tvm.pubkey()), 102);
        _;
    }

    modifier onlyAssetRoot {
        require(_assetRoots.exists(msg.sender), 103);
        _;
    }

    modifier onlyServiceRoot {
        require(_serviceRoots.exists(msg.sender), 104);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    /*
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    constructor(uint128 balanceAfterDeployment, address gasReceiver) public demiurgeIsCreator onlyOneOwner {
        tvm.rawReserve(balanceAfterDeployment, 2);
        _sendGas128(gasReceiver);
    }


    /*************************
     * EXTERNAL * ONLY OWNER *
     *************************/
    /*
       root ....... Address of asset root contract
       payload .... Information for destination contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function createAsset(address root, TvmCell payload, uint32 timeout) override external onlyOwner {
        _clearAssetRoots();
        _addAssetRoot(root, timeout);
        root.transfer({ value: 0, bounce: false, flag: 64, body: payload });
    }

    /*
       root ....... Address of service root contract
       payload .... Information for destination contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function createService(address root, TvmCell payload, uint32 timeout) override external onlyOwner {
        _clearServiceRoots();
        _addServiceRoot(root, timeout);
        root.transfer({ value: 0, bounce: false, flag: 64, body: payload });
    }

    /*
       Call this if something with roots goes wrong.
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function clearAssetRoots(address gasReceiver) override external onlyOwner {
        _clearAssetRoots();
        _sendGas64(gasReceiver);
    }

    /*
       Additional function.
       Call this if something with roots goes wrong.
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function clearServiceRoots(address gasReceiver) override external onlyOwner {
        _clearServiceRoots();
        _sendGas64(gasReceiver);
    }

    /*
       Additional function.
       Call this if something with roots goes wrong.
       asset .......... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function addAsset(address asset, address gasReceiver) override external onlyOwner {
         _assets.getSet(asset, true);
        _sendGas64(gasReceiver);
    }

    /*
       Additional function.
       Call this if something with roots goes wrong.
       service ........ Address of service
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function addService(address service, address gasReceiver) override external onlyOwner {
         _services.getSet(service, true);
        _sendGas64(gasReceiver);
    }

    /*
       asset .......... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function removeAsset(address asset, address gasReceiver) override external onlyOwner {
        if (_assets.exists(asset))
            delete _assets[asset];
        _sendGas64(gasReceiver);
    }

    /*
       service ........ Address of service
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function removeService(address service, address gasReceiver) override external onlyOwner {
        if (_services.exists(service))
            delete _services[service];
        _sendGas64(gasReceiver);
    }

    /*
       asset ...... Address of asset
       payload .... Information for destination contract
     */
    function callAsset(address asset, TvmCell payload, address gasReceiver) override external onlyOwner {
        if (_assets.exists(asset))
            asset.transfer({ value: 0, bounce: false, flag: 64, body: payload });
        else
            _sendGas64(gasReceiver);
    }

    /*
       service .... Address of service
       payload .... Information for destination contract
     */
    function callService(address service, TvmCell payload, address gasReceiver) override external onlyOwner {
        if (_services.exists(service))
            service.transfer({ value: 0, bounce: false, flag: 64, body: payload });
        else
            _sendGas64(gasReceiver);
    }


    /******************************
     * EXTERNAL * ONLY ASSET ROOT *
     ******************************/
    /*
       root ........... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function onCreateAsset(address addr, address gasReceiver) override external onlyAssetRoot {
        _removeAssetRoot(addr);
        _assets[addr] = true;
        _sendGas64(gasReceiver);
    }


    /********************************
     * EXTERNAL * ONLY SERVICE ROOT *
     ********************************/
    /*
       root ........... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function onCreateService(address addr, address gasReceiver) override external onlyServiceRoot {
        _removeServiceRoot(addr);
        _services[addr] = true;
        _sendGas64(gasReceiver);
    }


    /***********
     * GETTERS *
     ***********/
    function getDetails() override external view responsible returns(
            address demiurge,
            address owner,
            mapping(address => Sender) assetRoots,
            mapping(address => Sender) serviceRoots,
            address[] assets,
            address[] services
        )
    {
        for((address addr, ) : _assets)
            assets.push(addr);
        for((address addr, ) : _services)
            services.push(addr);
        return { value: 0, bounce: false, flag: 64 } (
            _demiurge,
            _owner,
            _assetRoots,
            _serviceRoots,
            assets,
            services
        );
    }

    function getOnCreateAssetFunction() override external view returns(uint32) {
        return tvm.functionId(Customer.onCreateAsset);
    }

    function getOnCreateServiceFunction() override external view returns(uint32) {
        return tvm.functionId(Customer.onCreateService);
    }


    /***********
     * PRIVATE *
     ***********/
    function _clearAssetRoots() private {
        for((address addr, Sender sender) : _assetRoots)
            if (sender.expireAt <= now)
                delete _assetRoots[addr];
    }

    function _clearServiceRoots() private {
        for((address addr, Sender sender) : _serviceRoots)
            if (sender.expireAt <= now)
                delete _serviceRoots[addr];
    }

    /*
       root ....... Address of asset root contract
     */
    function _removeAssetRoot(address root) private {
        if (_assetRoots.exists(root))
            if (_assetRoots[root].count == 1)
                delete _assetRoots[root];
            else
                _assetRoots[root].count == _assetRoots[root].count - 1;
    }

    /*
       root ....... Address of service root contract
     */
    function _removeServiceRoot(address root) private {
        if (_serviceRoots.exists(root))
            delete _serviceRoots[root];
        if (_assetRoots.exists(root))
            if (_assetRoots[root].count == 1)
                delete _assetRoots[root];
            else
                _assetRoots[root].count == _assetRoots[root].count - 1;
    }

    /*
       root ....... Address of asset root contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function _addAssetRoot(address root, uint32 timeout) private {
        uint32 expireAt = now + timeout;
        _assetRoots.getSet(root, Sender(0, expireAt));
        _assetRoots[root].count = _assetRoots[root].count + 1;
        _assetRoots[root].expireAt = expireAt;
    }

    /*
       root ....... Address of service root contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function _addServiceRoot(address root, uint32 timeout) private {
        uint32 expireAt = now + timeout;
        _serviceRoots.getSet(root, Sender(0, expireAt));
        _serviceRoots[root].count = _serviceRoots[root].count + 1;
        _serviceRoots[root].expireAt = expireAt;
    }
}