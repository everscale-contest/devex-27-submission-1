pragma ton-solidity >= 0.48.0;

interface ICrystalAssetOwned {
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

    /*
       to ............. Destination asset address
       value .......... How much grams to transfer from
       gasReceiver .... Remaining balance receiver
       all ............ Set true if need to transfer all remaining balance
     */
    function withdraw(address to, uint128 value, address gasReceiver, bool all) external view;
}