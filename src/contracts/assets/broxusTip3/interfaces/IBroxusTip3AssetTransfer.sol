pragma ton-solidity >= 0.48.0;

interface IBroxusTip3AssetTransfer {
    /*
       to ............. Address of TIP-3 wallet
       tokens ......... How much crystals send to wallet
       gasReceiver .... Remaining balance receiver. msg.sender by default
       payload ........ Information for destination contract
     */
    function transfer(
        address to,
        uint128 tokens,
        address gasReceiver,
        TvmCell payload
    ) external;
}