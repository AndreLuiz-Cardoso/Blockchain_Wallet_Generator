///dependency import

const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//network define
//bitcoin - rede principal - mainnet
//testnet - rede de test - testnet
const network = bitcoin.networks.testnet

//wallet derivation
const path = `m/49'/1'/0'/0`

//creating mnemonic to seed (passwork)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//creating root of wallet
let root = bip32.fromSeed(seed, network)

//create a account - par pvt-pub keys
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh(
    {
        pubkey: node.publicKey,
        network: network,
    }
).address

console.log("wallet generated")
console.log("Adress: ", btcAddress)
console.log("Private key: ", node.toWIF())
console.log("Seed", mnemonic)