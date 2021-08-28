pragma ton-solidity >= 0.48.0;

interface IVendorToService {
    /*
       service ........ Address of service contract
       payload ........ Information for destination contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function toService(address service, TvmCell payload, address gasReceiver) external;
}