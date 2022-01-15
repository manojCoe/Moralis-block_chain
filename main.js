// connect to Moralis server

// In a node environment
// const Moralis  = require('moralis/node');

const serverUrl = "https://6xtirxf6mvc6.usemoralis.com:2053/server";
const appId = "J4VpwaLjbxssrCP7QDvtIyJWhNomyjgcI6Nh2ju3";
Moralis.start({serverUrl, appId});

import Ethereum from "./Ethereum.js";
import User from "./User.js";
import NFT from "./NFT.js";
import Avax from "./Avax.js";

const ethObj = new Ethereum(Moralis);
const userObj = new User(Moralis);
const nftObj = new NFT(Moralis);
const avObj = new Avax(Moralis);

// Moralis.initialize("UJY2UodBiQ3cg6qtbaFpACAhkjPafbkM6wovsa0bPa37W5WomhnObxI4ghxbdGY0");
// Moralis.serverUrl = "https://jwgiwgcwyyjj.usemoralis.com:2053/server";


// // add from here down
// async function login() {
//   let user = Moralis.User.current();
//   if (!user) {
//     user = await Moralis.authenticate();
//   }
//   console.log("logged in user:", user);
// }

// async function logOut() {
//   await Moralis.User.logOut();
//   console.log("logged out");
// }

// init()

// =======================User
document.getElementById("LoginwithMetamask").onclick = userObj.login;
document.getElementById("logout").onclick = userObj.logout;
document.getElementById("signin").onclick = () => userObj.signin(document.getElementById("email").value, document.getElementById("password").value);
// document.getElementById("getuser").onclick = currUser;
document.getElementById("getallusers").onclick = userObj.getAllUsers;

// =========================Ethereum
document.getElementById("getethaddresses").onclick = ethObj.getEthAddresses;
document.getElementById("transaction").onclick = () => ethObj.getNativeTransaction(document.getElementById("txhash").value);
document.getElementById("sendeth").onclick = () => ethObj.sendEth(document.getElementById("to_address").value, document.getElementById("eth_amount").value);


document.getElementById("gettransactions").onclick = ethObj.getAllEthTransactions;
// document.getElementById("getallethbalance").onclick = ethObj.getAllEthBalance;
document.getElementById("ethbyaddress").onclick = () => ethObj.getEthBalanceByAddress(document.getElementById("eth_address").value);

// =========================Nft
document.getElementById("getnfts").onclick = () => nftObj.getNfts(document.getElementById("nft_holder_address").value, document.getElementById("chain").value);
document.getElementById("getcollections").onclick = () => nftObj.getCollections(document.getElementById("contract_address").value, document.getElementById("nft_chain").value);
document.getElementById("getcollectionmeta").onclick = () => nftObj.getCollectionMeta(document.getElementById("contract_address_").value, document.getElementById("nft_chain_").value);
document.getElementById("getowners").onclick = () => ethObj.getOwners(document.getElementById("contract_address__").value, document.getElementById("nft_chain___").value);
document.getElementById("gettransfers").onclick = () => ethObj.getNFTTransfers(document.getElementById("contract_address___").value, document.getElementById("nft_chain____").value);
document.getElementById("getqueryresults").onclick = () => nftObj.queryString(document.getElementById("query_string").value, document.getElementById("nft_chain___").value);
document.getElementById("getuserbyid").onclick = () => userObj.getUserById(document.getElementById("user_id").value);

// ===========================Avax
document.getElementById("getallavaxbalance").onclick = avObj.getAllAvaxBalance;
document.getElementById("avaxtransaction").onclick = () => avObj.getAvaxTransaction(document.getElementById("avax_txhash").value);
document.getElementById("avaxbyaddress").onclick = () => avObj.getAvaxBalanceByAddress(document.getElementById("avax_address").value, document.getElementById("avax_chain").value);
document.getElementById("sendavax").onclick = () => avObj.sendAvax(document.getElementById("to_avax_address").value, document.getElementById("avax_amount").value);

// document.getElementById("signup").onclick = () => userObj.signup(document.getElementById("_name").value, document.getElementById("_email").value, document.getElementById("_password").value);
// document.getElementById("signin").onclick = () => signin(document.getElementById("email").value, document.getElementById("password").value);
// document.getElementById("signup").onclick = () => signup("test2@test.com", "test2@test.com");
// userObj.signup("account4", "test2@t.com", "test2@t.com", ["0x8bDBcfbdBAaC70735d4dc9e42c40AD77a526e787"]);
// var temp = signin("manojpraveen445@gmail.com", "manojpraveen445@gmail.com");
// console.log(temp);
// console.log(typeof(temp));
// console.log(Object.keys(temp));

// const currentUser = currUser();

// console.log(temp.accounts);
// document.getElementById("btn-logout").onclick = logOut;

// const currentUser = Moralis.User.current();
// if (currentUser) {
// 	console.log("User");
// 	console.log(currentUser);
// 	console.log(currentUser.accounts)
// } else {
//     console.log("No user found");
// }

// normal agree base fan siege silk cheese palm fluid glad hub position

// 0xdFadB4A2B0fF4A9b119530f4396727498582A47D rohit's address
// 0x8943C7bAC1914C9A7ABa750Bf2B6B09Fd21037E0 contract