pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "interfaces/IPeriodService.sol";
import "../../utils/GasSender.sol";
import "../../utils/GasSender128.sol";
import "../../utils/GasSender64.sol";
import "PeriodSubscription.sol";

/*
   Errors
      100 - Root must be the creator of the contract
      101 - Method for the owner only
      102 - Method for the offer root only
 */
contract PeriodService is IPeriodService, GasSender, GasSender128, GasSender64 {
    /**********
     * STATIC *
     **********/
    address public static _root;
    address public static _owner;
    TvmCell public static _subscriptionCode;


    /*************
     * VARIABLES *
     *************/
    uint32 private _periodDuration;
    mapping(address => Sender) _offerRoots;
    mapping(address => bool) _offers;


    /*************
     * MODIFIERS *
     *************/
    modifier rootIsCreator {
        require(msg.sender == _root, 100);
        _;
    }

    modifier onlyOwner {
        require(msg.sender == _owner, 101);
        _;
    }

    modifier onlyOfferRoot {
        require(_offerRoots.exists(msg.sender), 102);
        _;
    }


    /***************
     * CONSTRUCTOR *
     ***************/
    /*
       periodDuration ............ Time in seconds for which the subscription is renewed
       balanceAfterDeployment .... How much crystals will remain after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    constructor(uint32 periodDuration, uint128 balanceAfterDeployment, address gasReceiver) public rootIsCreator {
        tvm.rawReserve(balanceAfterDeployment, 2);
        _periodDuration = periodDuration;
        _sendGas128(gasReceiver);
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
        override
        external
        view
        responsible
        returns(
            address subscription,
            address receiver
        )
    {
        _gasReserve();
        TvmCell stateInit = tvm.buildStateInit({
            contr: PeriodSubscription,
            varInit: {
                _service: address(this),
                _owner: msg.sender
            },
            pubkey: 0,
            code: _subscriptionCode
        });
        return { value: 0, bounce: false, flag: 128 } (
            new PeriodSubscription{
                stateInit: stateInit,
                value: deploymentValue,
                wid: address(this).wid,
                flag: 1
            } (balanceAfterDeployment, gasReceiver),
            gasReceiver
        );
    }


    /*************************
     * EXTERNAL * ONLY OWNER *
     *************************/
    /*
       root ....... Address of root contract
       payload .... Information for destination contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function createOffer(address root, TvmCell payload, uint32 timeout)
        override
        external
        onlyOwner
        returns(address)
    {
        _clearOfferRoots();
        _addOfferRoot(root, timeout);
        root.transfer({ value: 0, bounce: false, flag: 64, body: payload });
    }

    /*
       Call this if something with roots goes wrong.
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function clearOfferRoots(address gasReceiver) override external onlyOwner {
        _clearOfferRoots();
        _sendGas64(gasReceiver);
    }

    /*
       Additional function.
       Call this if something with roots goes wrong.
       offer .......... Address of offer
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function addOffer(address offer, address gasReceiver) override external onlyOwner {
         _offers.getSet(offer, true);
        _sendGas64(gasReceiver);
    }

    /*
       offer .......... Address of Offer
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function removeOffer(address offer, address gasReceiver) override external onlyOwner {
        if (_offers.exists(offer))
            delete _offers[offer];
        _sendGas64(gasReceiver);
    }

    /*
       offer ...... Address of offer
       payload .... Information for destination contract
     */
    function callOffer(address offer, TvmCell payload, address gasReceiver) override external onlyOwner {
        if (_offers.exists(offer))
            offer.transfer({ value: 0, bounce: false, flag: 64, body: payload });
        else
            _sendGas64(gasReceiver);
    }


    /******************************
     * EXTERNAL * ONLY OFFER ROOT *
     ******************************/
    /*
       root ........... Address of offers
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function onCreateOffer(address addr, address gasReceiver) override external onlyOfferRoot {
        _removeOfferRoot(addr);
        _offers[addr] = true;
        _sendGas64(gasReceiver);
    }


    /***********
     * GETTERS *
     ***********/
    /*
       root .............. Address of root contract
       owner ............. Address of owner contract
       periodDuration .... Time in seconds for which the subscription is renewed
     */
    function getDetails() override external view responsible returns(
            address root,
            address owner,
            uint32  periodDuration,
            mapping(address => Sender) offerRoots,
            address[] offers
        )
    {
        for((address addr, ) : _offers)
            offers.push(addr);
        return { value: 0, bounce: false, flag: 64 } (
            _root,
            _owner,
            _periodDuration,
            _offerRoots,
            offers
        );
    }

    function getOnCreateOfferFunction() override external view returns(uint32) {
        return tvm.functionId(PeriodService.onCreateOffer);
    }

    function getSubscriptionCode() override external view responsible returns (TvmCell) {
        return { value: 0, bounce: false, flag: 64 } _subscriptionCode;
    }

    /*
       owner .... Address of owner
     */
    function getSubscriptionAddress(address owner) override external view responsible returns (address) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: PeriodSubscription,
            varInit: {
                _service: address(this),
                _owner: owner
            },
            pubkey: 0,
            code: _subscriptionCode
        });
        return { value: 0, bounce: false, flag: 64 } address(tvm.hash(stateInit));
    }


    /***********
     * PRIVATE *
     ***********/
    function _clearOfferRoots() private {
        for((address addr, Sender sender) : _offerRoots)
            if (sender.expireAt <= now)
                delete _offerRoots[addr];
    }

    /*
       root ....... Address of offer root contract
     */
    function _removeOfferRoot(address root) private {
        if (_offerRoots.exists(root))
            if (_offerRoots[root].count == 1)
                delete _offerRoots[root];
            else
                _offerRoots[root].count == _offerRoots[root].count - 1;
    }

    /*
       root ....... Address of offer root contract
       timeout .... How long wait answer from root. Time in seconds
     */
    function _addOfferRoot(address root, uint32 timeout) private {
        uint32 expireAt = now + timeout;
        _offerRoots.getSet(root, Sender(0, expireAt));
        _offerRoots[root].count = _offerRoots[root].count + 1;
        _offerRoots[root].expireAt = expireAt;
    }
}