pragma ton-solidity >= 0.48.0;

contract GasSender128 {
    /************
     * EXTERNAL *
     ************/
    /*
       gasReceiver ....... Remaining balance receiver. msg.sender by default
     */
    function _sendGas128(address gasReceiver) internal pure {
        if (gasReceiver.value != 0)
            gasReceiver.transfer({ value: 0, flag: 128 });
        else
            msg.sender.transfer({ value: 0, flag: 128 });
    }
}