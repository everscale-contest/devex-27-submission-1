pragma ton-solidity >= 0.48.0;

interface ICustomer {
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
       root ....... Address of subscription root contract
       payload .... Information for destination contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function createSubscription(address root, TvmCell payload, uint32 timeout) external;

    /*
       Call this if something with roots goes wrong.
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function clearAssetRoots(address gasReceiver) external;

    /*
       Call this if something with roots goes wrong.
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function clearSubscriptionRoots(address gasReceiver) external;

    /*
       Call this if something with roots goes wrong.
       asset .......... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function addAsset(address asset, address gasReceiver) external;

    /*
       Call this if something with roots goes wrong.
       subscription .... Address of subscription
       gasReceiver ..... Remaining balance receiver. msg.sender by default
     */
    function addSubscription(address subscription, address gasReceiver) external;

    /*
       asset .......... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function removeAsset(address asset, address gasReceiver) external;

    /*
       subscription .... Address of subscription
       gasReceiver ..... Remaining balance receiver. msg.sender by default
     */
    function removeSubscription(address subscription, address gasReceiver) external;

    /*
       asset ...... Address of asset
       payload .... Information for destination contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function callAsset(address asset, TvmCell payload, address gasReceiver) external;

    /*
       subscription .... Address of subscription
       payload ......... Information for destination contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function callSubscription(address subscription, TvmCell payload, address gasReceiver) external;


    /******************************
     * EXTERNAL * ONLY ASSET ROOT *
     ******************************/
    /*
       root ........... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function onCreateAsset(address addr, address gasReceiver) external;


    /*************************************
     * EXTERNAL * ONLY SUBSCRIPTION ROOT *
     *************************************/
    /*
       root ........... Address of asset
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function onCreateSubscription(address addr, address gasReceiver) external;


    /***********
     * GETTERS *
     ***********/
    function getDetails() external view responsible returns(
            address demiurge,
            address owner,
            mapping(address => Sender) assetRoots,
            mapping(address => Sender) subscriptionRoots,
            address[] assets,
            address[] subscription
        );

    function getOnCreateAssetFunction() external view returns(uint32);

    function getOnCreateSubscriptionFunction() external view returns(uint32);
}