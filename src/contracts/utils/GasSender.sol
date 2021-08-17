pragma ton-solidity >= 0.48.0;

contract GasSender {
    /************
     * EXTERNAL *
     ************/
    /*
       gasReceiver ....... Remaining balance receiver. msg.sender by default
     */
    function _gasReserve() internal view {
        tvm.rawReserve(address(this).balance - msg.value, 2);
    }
}