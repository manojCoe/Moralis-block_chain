// import {MnemonicWallet} from './avalabs/avalanche-wallet-sdk'
import {NetworkConstants, Network, MnemonicWallet, BN, Utils} from '@avalabs/avalanche-wallet-sdk';
import * as fs from 'fs';
// const Wallet = await MnemonicWallet();
// const MnemonicWallet = require('@avalabs/avalanche-wallet-sdk');
// const ss = require('@avalabs/avalanche-wallet-sdk');
// MnemonicWallet = ss.MnemonicWallet();

// Create a new wallet

class Avalanche{
    createUser = async() => {
        let newMnemonic = MnemonicWallet.generateMnemonicPhrase();
        let myWallet = MnemonicWallet.fromMnemonic(newMnemonic);

        let addressX = myWallet.getAddressX()
        let addressP = myWallet.getAddressP()
        let addressC = myWallet.getAddressC()

        console.log("Wallet: ", myWallet);
        console.log("AddressX: ". addressX);
        console.log("AddressP: ". addressP);
        console.log("AddressC: ". addressC);
        fs.writeFile ("wallet3.json", JSON.stringify(myWallet, null, 4), 'utf-8', function(err) {
            if (err) throw err;
            console.log('File has beem written.');
          });

        
    }

    getUser = async(Mnemonic) => {
        let myWallet = MnemonicWallet.fromMnemonic(Mnemonic);
        // Update the UTXOs
        // await myWallet.resetHdIndices();
        // await myWallet.updateUtxosX();
        const addressC = myWallet.getAddressC()
        console.log("Address: ", addressC);
        console.log("Balance: ", myWallet.getAvaxBalance());
        // console.log("Balance C: ", myWallet.getAvaxBalanceC(addressC, "AVAX"));
        
    }

    sendAvax = async(Mnemonic) => {

        let myWallet = MnemonicWallet.fromMnemonic(Mnemonic);
        // Mnemonic wallets need to find their HD index on startup
        const wallet_reset = await myWallet.resetHdIndices();
        // console.log("Reset: ", wallet_reset);

        // Update the UTXOs
        const utxosx = await myWallet.updateUtxosX();
        // console.log("utxsox: ", utxosx);

        // Send 1 nAVAX
        let to = "X-fuji1c4rc50mze5nuzrdmcgp7uncct7nvuujt7hz0dj";
        let amount = new BN(1);
        let txID = await myWallet.sendAvaxX(to, amount);
        // fs.writeFile ("avaxTransaction.json", JSON.stringify(txID, null, 4), 'utf-8', function(err) {
        //     if (err) throw err;
        //     console.log('File has beem written.');
        //   });
        console.log("txid: ", txID);

    }
}

// if (Wallet){
//     console.log(typeof(Wallet));
// }
// console.log(typeof(MnemonicWallet));
// Set to Fuji Testnet
// Network.setNetwork(NetworkConstants.TestnetConfig);
// console.log("Network: ", JSON.stringify(Network.getActiveNetworkConfig()));
// const avObj = new Avalanche();

console.log(parseInt("100000000000000000", 16));

// let newMnemonic = MnemonicWallet.generateMnemonicPhrase();
// console.log("type", typeof(newMnemonic));
// console.log("Mnemonic: ", newMnemonic);

// avObj.createUser();

// const w1 = "vapor huge circle album release cage frame wrap future kick rocket ready bounce purity burger donkey peace dismiss love blind feel powder device culture";
// avObj.getUser(w1);
// avObj.sendAvax(w1);

// let myWallet = MnemonicWallet.create()
// console.log("Wallet: ", myWallet);

// let newMnemonic = MnemonicWallet.generateMnemonicPhrase()
// console.log("Phrase: ", newMnemonic);
// let myWallet = MnemonicWallet.fromMnemonic(newMnemonic)

// let addressX = myWallet.getAddressX()
// let addressP = myWallet.getAddressP()
// let addressC = myWallet.getAddressC()

// console.log("Wallet: ", myWallet);
// console.log("AddressX: ". addressX);
// console.log("AddressP: ". addressP);
// console.log("AddressC: ". addressC);

