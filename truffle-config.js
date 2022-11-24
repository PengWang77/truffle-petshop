var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "crawl miracle corn aunt tissue trust amount liberty wrap weapon acquire peace";

module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 7545,
   network_id: "*"
  },
  goerli: {
      provider: function() {
       return new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/223dd071502d4a36a14032372ccbac8f");
      },
      network_id: 5,
      gas: 4500000,
      gasPrice: 10000000000,
  }
 }
};
