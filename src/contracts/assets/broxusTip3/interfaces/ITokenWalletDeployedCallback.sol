pragma ton-solidity >= 0.48.0;

interface ITokenWalletDeployedCallback {
    function notifyWalletDeployed(address root) external;
}