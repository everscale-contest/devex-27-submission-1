pragma ton-solidity >= 0.48.0;

interface IServiceToOffer {
    /*
       offer .......... Address of offer contract
       payload ........ Information for destination contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function toOffer(address offer, TvmCell payload, address gasReceiver) external;
}