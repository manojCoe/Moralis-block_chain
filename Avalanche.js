// import {MnemonicWallet} from './avalabs/avalanche-wallet-sdk'
import MnemonicWallet from './@avalabs/avalanche-wallet-sdk';
// const MnemonicWallet = require('@avalabs/avalanche-wallet-sdk');
// const ss = require('@avalabs/avalanche-wallet-sdk');
// MnemonicWallet = ss.MnemonicWallet();

// Create a new wallet

export default class Avalanche{
    createUser = async() => {
        let newMnemonic = MnemonicWallet.generateMnemonicPhrase()
        let myWallet = MnemonicWallet.fromMnemonic(newMnemonic)

        let addressX = myWallet.getAddressX()
        let addressP = myWallet.getAddressP()
        let addressC = myWallet.getAddressC()

        console.log("Wallet: ", myWallet);
        console.log("AddressX: ". addressX);
        console.log("AddressP: ". addressP);
        console.log("AddressC: ". addressC);
    }
}

console.log(typeof(MnemonicWallet));

avObj = new Avalanche();
avObj.createUser();

