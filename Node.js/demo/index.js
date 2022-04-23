

const {generateMnemonic} = require('bip39');

const mnemonic = generateMnemonic(256);

console.log('mnemonic 생성');
console.log(mnemonic);


const HDKey = require('@oasisprotocol/client').hdkey;

const coin = new HDKey();


//console.log(keypair);


