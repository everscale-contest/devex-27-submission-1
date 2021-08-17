pragma ton-solidity >= 0.48.0;

interface ICrystalAssetOwned {
    /************
     * EXTERNAL *
     ************/
    /*
       to ............. Destination asset address
       value .......... How much grams to transfer from
       bounce ......... Bounce flag. Set true if need to transfer grams to existing account
       gasReceiver .... Remaining balance receiver
     */
    function withdraw(address to, uint128 value, bool bounce, address gasReceiver) external view;

    /*
       to ............. Destination asset address
       bounce ......... Bounce flag. Set true if need to transfer grams to existing account
       gasReceiver .... Remaining balance receiver
     */
    function withdrawAll(address to, bool bounce, address gasReceiver) external view;
}