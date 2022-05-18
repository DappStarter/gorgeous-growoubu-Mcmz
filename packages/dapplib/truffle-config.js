require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain unusual hunt rocket tail series'; 
let testAccounts = [
"0x86483a815561521a698503cf680d46df68c7fd29eea4bcb7c40189166b5213e0",
"0x6fcc154a102cbab012d5b6a59fe4239bc2a1e4a843b88a76ece0ec743bf7c14d",
"0x919c55302fa6695580f46107a8dd864c4ce95e8194a3d0e795055087e2b9f289",
"0x2f98eec1b05214049b8c253d9ace13c9be4ceac7b888883580bb38656e0218fd",
"0xd41f37d8b4127a4ed87b966b1f20cb8356b81f0ff1464b3ff24a5e5699bb8cec",
"0x59f66e508f869c84337d05a6001ffbcd87375c466a742bb24efbdd86d6a4f0c8",
"0x7566938e31e35599d82ed979ba309d0a2eb2bad0bbd820968d59339fe35c30c6",
"0x9d1f5636ca47fc5a618da1df22814347ff0a1c0dc299b68f807ccd4701e98423",
"0x581b4cfdfe10dfa0773ca50ea4f11aa42b6fba6af53aaf096ce5a8b611071ea8",
"0x4929ef233ca9ba2df1eaaf7117e12d908de9a47b8d4c406b3423bb90f01ae803"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

