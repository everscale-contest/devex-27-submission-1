pragma ton-solidity >= 0.48.0;

interface ICrystalAsset {
    /************
     * EXTERNAL *
     ************/
    /*
       root ....... Address of root contract
       owner ...... Address of owner contract
       balance .... How much crystals on contract balance
     */
    function getDetails() external view responsible returns(address root, address owner, uint128 balance);
}