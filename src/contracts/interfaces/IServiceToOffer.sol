pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

interface IServiceToOffer {
    /*
       offer .......... Address of offer contract
       payload ........ Payload for offer contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function toOffer(address offer, TvmCell payload, address gasReceiver) external;
}