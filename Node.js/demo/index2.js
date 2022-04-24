

//const { addressToBech32 } = require('@oasisprotocol/client/dist/staking');
const {generateMnemonic} = require('bip39');
//import * as oasis from '@oasisprotocol/client';

const mnemonic = generateMnemonic(256);

console.log(`mnemonic 생성 : ${mnemonic}`);


// 객체로 받아오기 프로토콜 안에 정의된 hdkey
const {HDKey} = require('@oasisprotocol/client').hdkey;
//const{ staking } = require('@oasisprotocol/client').staking;

// 뉴모닉 생성하기
//const m = HDKey.generateMnemonic(256);

//console.log(` m : ${m}`);
//console.log(HDKey.privateKey); //undefined

//passphrase 생성하기
const passphrase = generateMnemonic(256); //optional passphrase

console.log(`passphrase 생성 : ${passphrase}`)

const hdkey = new HDKey();

const keypair = hdkey.getAccountSigner(mnemonic, 0, passphrase);

console.log(keypair);

//const publicKey = keypair;
//console.log(`publickey 생성 : ${publicKey}`);
//const address = oasis.staking.addressFromPulbicKey(publicKey);

//console.log(`address 생성 : ${address}`);


// privateHex, publicKey, account

//const address = addressFromPublicKey(PublicKey);

//const keypair = HDKey.getAccountSigner(m, 0, passphrase);

//console.log(keypair.publicKey);

// const publicKey ='';
// const data = staking.
// const address = staking.addressToBech32(data);


//console.log(keypair);


