# Bitcoin Wallet Generator (Testnet)

## Description
This project is a **Bitcoin wallet generator for the testnet network**, developed in JavaScript using popular libraries such as `bip32`, `bip39`, and `bitcoinjs-lib`. It facilitates the creation of Bitcoin addresses, private keys, and mnemonic phrases for testing and developing blockchain-based applications without the need for real funds.

---

## Features
- **Testnet-Compatible Wallet Generation**: Uses the derivation path **`m/49'/1'/0'/0`** to create SegWit-compatible wallets.
- **Mnemonic Phrase Creation**: Generates a 12-word mnemonic phrase using the **BIP39** standard.
- **Key Derivation**: Derives private and public keys from the generated seed using **BIP32**.
- **Bitcoin Address Generation**: Produces a Bitcoin address in the **P2PKH (Pay-to-Pubkey Hash)** format, compatible with the testnet.
- **Output Display**: Prints the Bitcoin address, private key (in WIF format), and mnemonic phrase to the console.

---

## Technologies
- **Node.js**: Runtime environment for executing the project.
- **bip32**: Handles hierarchical deterministic (HD) wallet key derivation.
- **bip39**: Creates mnemonic phrases and converts them to seeds.
- **bitcoinjs-lib**: Manages Bitcoin addresses and transactions.

---

## How to Use
1. Clone the repository:
   ```bash
   git clone <repository_link>
   ```
2. Install dependencies:
   ```bash
   npm install bip32 bip39 bitcoinjs-lib
   ```
3. Run the script:
   ```bash
   node createwallet.js
   ```
4. The output will display:
   - The generated Bitcoin address.
   - The associated private key.
   - The mnemonic phrase for wallet recovery.

---

## Sample Output
```plaintext
Wallet generated
Address:  2NXXXXX... (SegWit-compatible address)
Private Key:  cXXXXX... (private key in WIF format)
Seed: word1 word2 ... word12
```

---

## Applications
- Test Bitcoin transactions in a safe, cost-free environment.
- Develop blockchain-based applications.
- Learn the fundamentals of Bitcoin wallet generation.

---

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Contributions
Contributions are welcome! Feel free to open issues or submit pull requests with improvements and suggestions.

