var HDWalletProvider = require('truffle-hdwallet-provider');
const MNEMONIC =
  'gesture rather obey video awake genuine patient base soon parrot upset lounge';

/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // to customize your Truffle configuration!
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 9545,
//       network_id: "*" // Match any network id
//     },
//     ropsten: {
//       provider: function () {
//         return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/f2aa27e5bf2b4bf1b3b002e8687b61da")
//       },
//       network_id: 3,
//       gas: 3000000      //make sure this gas allocation isn't over 4M, which is the max
//     }
//   },
// };

module.exports = {
  networks: {
    development: {
      // provider: function () {
      //   return new HDWalletProvider(MNEMONIC, "http://localhost:8545", 0, /* address_index */)
      // },
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          'https://ropsten.infura.io/v3/f2aa27e5bf2b4bf1b3b002e8687b61da',
          0,
          5,
        );
      },
      network_id: 3,
      gas: 3000000, //make sure this gas allocation isn't over 4M, which is the max
    },
    rinkeby: {
      privider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          'https://rinkeby.infura.io/v3/<INFURA_Access_Token>',
        );
      },
      network_id: 4,
      gas: 3000000,
    },
  },
};
