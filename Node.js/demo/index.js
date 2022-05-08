const nacl = require('tweetnacl'); //keypair 생성
const { generateMnemonic, mnemonicToSeedSync } = require('bip39'); // mnemonic 생성
const { addressToBech32 } = require('@oasisprotocol/client/dist/staking');
const ED25519_CURVE ='ed25519 seed';


const mnemonic = generateMnemonic(256);
console.log(`menmonic 생성 : ${mnemonic}`);
const passphrase = generateMnemonic(256);
console.log(`passpharse 생성  : ${passphrase}`);

const { HDKey } = require(`@oasisprotocol/client`).hdkey;
const { addressFromPublicKey , publicKeyToAddress } = require('@oasisprotocol/client').staking;

const buffer = mnemonicToSeedSync(mnemonic);
console.log(`buffer  : ${buffer}`);

// mnemonic으로 seed를 생성하고 (buffer type을 Uint8Array로 변경)
const seed = new Uint8Array(buffer.toJSON().data.slice(0,32));

console.log(`seed 생성 : ${seed}`);

// seed로 keypair를 생성 -> publickey ,secretkey생성
const keyPair = nacl.sign.keyPair.fromSeed(seed); // return nacl.SignKeyPair 
 
//const keyPair = HDKey.getAccountSigner(mnemonic, 0,passphrase);
console.log(keyPair);

//publicKey를 통해서 address를 만들고 (기존의 oasis~ + publickey로 만드는 구조)
// secretkey를 통해서 privatekey를 만드는 구조?

//console.log(keyPair); //안에 public 과 secretkey 있음
//console.log(keyPair.publicKey.toString());
const publicKey = keyPair.publicKey;
const data = addressFromPublicKey(publicKey); //return Type Promise<> 
console.log(`data : ${data}`); //정보가 생성되지 않음...Promise Type Object

const address = addressToBech32(addressFromPublicKey(publicKey)); //oasis1xtnxq8 + public Key 에서 도출된 data
console.log(`address : ${address}`);

// const key = HDKey.makeHDKey(ED25519_CURVE, seed);
// const publicKey = key.publicKey;

// const address = addressFromPublicKey(publicKey);