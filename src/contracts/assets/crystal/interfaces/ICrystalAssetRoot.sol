pragma ton-solidity >= 0.48.0;

interface ICrystalAssetRoot {
    /************
     * EXTERNAL *
     ************/
    /*
       owner .......... Address of asset owner
       deployValue .... How much crystals send to wallet on deployment
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function create(address owner, uint128 deployValue, address gasReceiver)
        external
        view
        responsible
        returns(
            address asset,
            address receiver
        );


    /***********
     * GETTERS *
     ***********/
    function getCode() external view responsible returns(TvmCell);

    /*
       owner .... Address of contract owner
     */
    function getAddress(address owner) external view responsible returns(address);
}