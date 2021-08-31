pragma ton-solidity >= 0.48.0;

interface IVendor {
    /**************
     * STRUCTURES *
     **************/
    struct Sender {
        uint16 count;
        uint32 expireAt;
    }

    /*************************
     * EXTERNAL * ONLY OWNER *
     *************************/
    /*
       root ....... Address of asset root contract
       payload .... Information for destination contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function createAsset(address root, TvmCell payload, uint32 timeout) external;

    /*
       root ....... Address of service root contract
       payload .... Information for destination contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function createService(address root, TvmCell payload, uint32 timeout) external;

    /*
       Call this if something with roots goes wrong.
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function clearAssetRoots(address gasReceiver) external;

    /*
       Call this if something with roots goes wrong.
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function clearServiceRoots(address gasReceiver) external;

    /*
       Call this if something with roots goes wrong.
       asset .......... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function addAsset(address asset, address gasReceiver) external;

    /*
       Call this if something with roots goes wrong.
       service ........ Address of service
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function addService(address service, address gasReceiver) external;

    /*
       asset .......... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function removeAsset(address asset, address gasReceiver) external;

    /*
       service ........ Address of service
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function removeService(address service, address gasReceiver) external;

    /*
       asset ...... Address of asset
       payload .... Information for destination contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function callAsset(address asset, TvmCell payload, address gasReceiver) external;

    /*
       service .... Address of service
       payload .... Information for destination contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function callService(address service, TvmCell payload, address gasReceiver) external;


    /******************************
     * EXTERNAL * ONLY ASSET ROOT *
     ******************************/
    /*
       root ........... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function onCreateAsset(address addr, address gasReceiver) external;


    /********************************
     * EXTERNAL * ONLY SERVICE ROOT *
     ********************************/
    /*
       root ........... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function onCreateService(address addr, address gasReceiver) external;


    /***********
     * GETTERS *
     ***********/
    function getDetails() external view responsible returns(
            address demiurge,
            address owner,
            mapping(address => Sender) assetRoots,
            mapping(address => Sender) serviceRoots,
            address[] assets,
            address[] services
        );

    function getOnCreateAssetFunction() external view returns(uint32);

    function getOnCreateServiceFunction() external view returns(uint32);
}