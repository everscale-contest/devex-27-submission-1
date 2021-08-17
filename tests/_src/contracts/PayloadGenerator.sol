pragma ton-solidity >= 0.48.0;
pragma AbiHeader expire;

import "../../../src/contracts/interfaces/IServiceToOffer.sol";
import "../../../src/contracts/interfaces/IVendorToService.sol";

contract PayloadGenerator is IServiceToOffer, IVendorToService {
    /*
       service ........ Address of service contract
       payload ........ Payload for service contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function toService(address service, TvmCell payload, address gasReceiver) override external {}

    /*
       offer .......... Address of offer contract
       payload ........ Payload for offer contract
       gasReceiver .... Remaining balance receiver. msg.sender by default
     */
    function toOffer(address offer, TvmCell payload, address gasReceiver) override external {}

    /*
       assetBits ....... How many bits are data of the asset
       assetAddress .... Address of vendor asset contract
       assetValue ...... Value of asset that was sent to the vendor
       months .......... Customer subscription data
       discount ........ Service data that calculated in service contract
       accepter ........ Address of accepter contract
       gasReceiver ..... Remaining balance receiver. msg.sender by default
     */
    function offer(
        uint32  assetBits,
        address assetAddress,
        uint128 assetValue,
        uint32  months,
        uint32  discount,
        address accepter,
        address gasReceiver
    )
        public pure {}
}