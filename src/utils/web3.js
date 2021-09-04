const Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider(process.env.VUE_APP_ETH_RPC))
if (window.ethereum){
    web3 = new Web3(Web3.givenProvider);
}
const DHS = require("@/utils/tokens").tokens[0];
const chainsInfo ={'0x1': {
    chainId: "0x1",
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
    },
    rpcUrls: ["https://mainnet.infura.io/v3/undefined"],
    blockExplorerUrls: ["https://etherscan.io/"],
    iconUrls: []

}};


function addDHSToWallet() {
    return window.ethereum
        .request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: DHS.contractAddress,
                    symbol: DHS.symbol,
                    decimals: 18,
                    image: 'https://dirhamcrypto.io/favicon.ico',
                },
            }
        })
        .then((success) => {
            if (success) {
                console.log('FOO successfully added to wallet!')
            } else {
                throw new Error('Something went wrong.')
            }
        })
        .catch(console.error)

}

function addNetwork(chainId) {
    return window.ethereum
        .request({
            method: 'wallet_addEthereumChain',
            params: [chainsInfo[chainId]],
        });
}


module.exports = {
    web3,
    
    addDHSToWallet,
    
    addNetwork
};