pragma ton-solidity >= 0.48.0;

interface ICrystalAssetTransfer {
    /************
     * EXTERNAL *
     ************/
    /*
       to ............. Destination asset address
       value .......... How much grams to transfer from
       gasReceiver .... Remaining balance receiver
       payload ........ Information for destination contract
     */
    function transfer(address to, uint128 value, address gasReceiver, TvmCell payload) external view;
}