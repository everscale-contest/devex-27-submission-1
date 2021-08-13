pragma ton-solidity >= 0.48.0;

interface ICrystalAssetOwned {
    /***********
     * GETTERS *
     ***********/
    /*
       gasReceiver .... Remaining balance receiver
       payload ........ Information for destination contract
     */
    function internalTransfer(address gasReceiver, TvmCell payload) external view;
}