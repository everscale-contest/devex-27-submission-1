pragma ton-solidity >= 0.48.0;

interface IBroxusTip3Asset {
    /************
     * EXTERNAL *
     ************/
    /*
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function setReceiveCallback(address gasReceiver) external;

    /*
       value .......... Address of TIP-3 wallet to be deployed
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function setWallet(address wallet, address gasReceiver) external;

    /*
       deployEmptyWalletGrams .... How much crystals will remain on TIP-3 wallet after deployment
       gasReceiver ............... Remaining balance receiver. msg.sender by default
     */
    function deployWallet(uint128 deployEmptyWalletGrams, address gasReceiver) external;


    /***********
     * GETTERS *
     ***********/
    /*
       root ........ Address of root contract
       owner ....... Address of owner contract
       tip3Root .... Address of TIP-3 root contract
       wallet ...... Address of TIP-3 wallet to be deployed
     */
    function getDetails() external view responsible returns(
            address root,
            address owner,
            address tip3Root,
            address wallet
        );
}