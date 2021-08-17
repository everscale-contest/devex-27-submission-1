pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

interface IVendorToService {
    /*
       service ........ Address of service contract
       payload ........ Payload for service contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function toService(address service, TvmCell payload, address gasReceiver) external;
}