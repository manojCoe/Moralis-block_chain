const axios = require('axios');
const fs = require('fs');
const { async } = require('regenerator-runtime');
const { file } = require('tmp');
class OpenSea{
  constructor(url, params){
    this.params = params;
    this.url = url;
  }
  getCollectionsList = async() => {
    axios.get(this.url, this.params)
    .then(res => {
      console.log("type: ", typeof(JSON.stringify(res.data)));

      fs.writeFile ("collections.json", JSON.stringify(res.data, null, 4), 'utf-8', function(err) {
        if (err) throw err;
        console.log('File has beem written.');
      });
    })
    .catch(err => {
      console.error(err); 
    })

  }

  getCollection = async(slug) => {
    const collection_url = "https://api.opensea.io/api/v1/collection/" + slug;
    axios.get(collection_url, this.params)
    .then(res => {
      console.log("type: ", typeof(JSON.stringify(res.data)));
      const filename = slug + ".json";
      fs.writeFile (filename, JSON.stringify(res.data, null, 4), 'utf-8', function(err) {
        if (err) throw err;
        console.log(filename + ' has been created.');
      });
    })
    .catch(err => {
      console.error(err); 
    })

  }

  getOrders = async() => {
    const orderUrl = "https://api.opensea.io/wyvern/v1/orders/";
    axios.get(orderUrl, this.params)
    .then(res => {
      console.log("type: ", typeof(JSON.stringify(res.data)));
      const filename = "orders.json";
      fs.writeFile (filename, JSON.stringify(res.data, null, 4), 'utf-8', function(err) {
        if (err) throw err;
        console.log(filename + ' has been created.');
      });
    })
    .catch(err => {
      console.error(err); 
    })
  }


  getAssets = async() => {
    const assetUrl = "https://api.opensea.io/api/v1/assets/";
    axios.get(assetUrl, this.params)
    .then(res => {
      console.log("type: ", typeof(JSON.stringify(res.data)));
      const filename = "assets.json";
      fs.writeFile (filename, JSON.stringify(res.data, null, 4), 'utf-8', function(err) {
        if (err) throw err;
        console.log(filename + ' has been created.');
      });
    })
    .catch(err => {
      console.error(err); 
    })
  }

  getBundles = async() => {
    const bundleUrl = "https://api.opensea.io/api/v1/bundles/";
    axios.get(bundleUrl, this.params)
    .then(res => {
      console.log("type: ", typeof(JSON.stringify(res.data)));
      const filename = "bundles.json";
      fs.writeFile (filename, JSON.stringify(res.data, null, 4), 'utf-8', function(err) {
        if (err) throw err;
        console.log(filename + ' has been created.');
      });
    })
    .catch(err => {
      console.error(err); 
    })
  }

}

class Account{
  constructor(params){
    this.params = params;
  }

  getAccountTransactions = async(eth_address, chain) => {
    const url = "https://deep-index.moralis.io/api/v2/";
    const account_url = url + eth_address + '?chain=' + chain;
    console.log("account_url: ", account_url);
    axios.get(account_url, this.params)
    .then(res => {
      console.log("type: ", typeof(JSON.stringify(res.data)));
      const filename = "account.json";
      fs.writeFile (filename, JSON.stringify(res.data, null, 4), 'utf-8', function(err) {
        if (err) throw err;
        console.log(filename + ' has been created.');
      });
    })
    .catch(err => {
      console.error(err); 
    })
  }

  getAccountBalance = async(eth_address, chain) => {
    const url = "https://deep-index.moralis.io/api/v2/";
    const account_url = url + eth_address + '/balance?chain=' + chain;
    console.log("account_url: ", account_url);
    axios.get(account_url, this.params)
    .then(res => {
      console.log("type: ", typeof(JSON.stringify(res.data)));
      console.log("Account Balance: ", JSON.stringify(res.data));
      const filename = "balance.json";
      fs.writeFile (filename, JSON.stringify(res.data, null, 4), 'utf-8', function(err) {
        if (err) throw err;
        console.log(filename + ' has been created.');
      });
    })
    .catch(err => {
      console.error(err); 
    })
  }

}

url = "https://api.opensea.io/api/v1/collections/";
const params = {
	"offset": 0,
  "limit": 3,
  // 'X-API-KEY': 'f381dbdbfe7947ebabbb78562d249335';
	"headers": {
    'X-API-KEY': 'f381dbdbfe7947ebabbb78562d249335'
	}
}

// opObj = new OpenSea(url, params);
// // opObj.getCollectionsList();

// collection_slug = "jamban-6-YeS";
// opObj.getCollection(collection_slug)

const account_params = {

  "headers" : {
    'accept': 'application/json',
    'X-API-Key': 'UJY2UodBiQ3cg6qtbaFpACAhkjPafbkM6wovsa0bPa37W5WomhnObxI4ghxbdGY0'
  }
}

accObj = new Account(account_params);
accObj.getAccountBalance("0x00837d4855F0C08D272DA9b01B200aD4B24B4831", "avalanche testnet");

// opObj.getOrders();

// opObj.getAssets();

// opObj.getBundles();

