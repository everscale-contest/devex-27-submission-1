pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

interface IPeriodService {
    /**************
     * STRUCTURES *
     **************/
    struct Sender {
        uint16 count;
        uint32 expireAt;
    }


    /************
     * EXTERNAL *
     ************/
    /*
       deploymentValue .......... Value with which the contract will be deployed
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function createSubscription(
        uint128 deploymentValue,
        uint128 balanceAfterDeployment,
        address gasReceiver
    )
        external
        view
        responsible
        returns(
            address subscription,
            address receiver
        );

    /*
       root ....... Address of root contract
       payload .... Information for destination contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function createOffer(address root, TvmCell payload, uint32 timeout) external returns(address);

/*
       Call this if something with roots goes wrong.
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function clearOfferRoots(address gasReceiver) external;

    /*
       Additional function.
       Call this if something with roots goes wrong.
       offer .......... Address of offer
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function addOffer(address offer, address gasReceiver) external;

    /*
       offer .......... Address of Offer
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function removeOffer(address offer, address gasReceiver) external;

    /*
       offer ...... Address of offer
       payload .... Information for destination contract
     */
    function callOffer(address offer, TvmCell payload, address gasReceiver) external;


    /******************************
     * EXTERNAL * ONLY OFFER ROOT *
     ******************************/
    /*
       root ........... Address of offers
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function onCreateOffer(address addr, address gasReceiver) external;


    /***********
     * GETTERS *
     ***********/
    function getSubscriptionCode() external view responsible returns (TvmCell);

    function getOnCreateOfferFunction() external view returns(uint32);

    /*
       root .............. Address of root contract
       owner ............. Address of owner contract
       periodDuration .... Time in seconds for which the subscription is renewed
     */
    function getDetails() external view responsible returns(
            address root,
            address owner,
            uint32  periodDuration,
            mapping(address => Sender) offerRoots,
            address[] offers
        );

    /*
       owner .... Address of owner
     */
    function getSubscriptionAddress(address owner) external view responsible returns (address);
}