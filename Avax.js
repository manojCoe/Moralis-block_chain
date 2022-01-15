export default class Avax{

    constructor(Moralis){
        this.Moralis = Moralis;
    }

	getAllAvaxBalance = async() => {
        try{
            const query = new Moralis.Query('AvaxBalance');
            const results = await query.find();
            alert("Successfully retrieved " + results.length + " records.");
            // console.log("AvaxBalance: ", JSON.stringify(results));
            for(let i = 0; i<results.length; i++){
            	const ob = results[i];
            	console.log(ob.attributes);
            }
            return JSON.stringify(results);
        }
        catch (error) {
		    console.error(error); // from creation or business logic
		}
	}

    // getAvaxBalanceByAddress = async(eth_address) => {
	// 	const query = new this.Moralis.Query('AvaxBalance');
	// 	query.equalTo("attributes.address", eth_address);

	// 	console.log("query: ", query);
	// 	try{
	// 		const results = await query.first();
	// 		console.log("Avax Balance: ", JSON.stringify(results));
	// 		return JSON.stringify(results);
	// 	}

	// 	catch (error) {
	// 	    console.error(error); // from creation or business logic
	// 	}
	// }
    getAvaxBalanceByAddress = async(eth_address, chain) => {
      const params = {

        "headers" : {
          'accept': 'application/json',
          'X-API-Key': 'UJY2UodBiQ3cg6qtbaFpACAhkjPafbkM6wovsa0bPa37W5WomhnObxI4ghxbdGY0'
        }
      }
        const url = "https://deep-index.moralis.io/api/v2/";
        const account_url = url + eth_address + '/balance?chain=' + chain;
        console.log("account_url: ", account_url);
        axios.get(account_url, params)
        .then(res => {
          console.log("type: ", typeof(JSON.stringify(res.data)));
          console.log("Account Balance: ", JSON.stringify(res.data));
        })
      }

    sendAvax = async(to_address, amount) => {
      // sending 0.5 ETH
      const options = {type: "native", amount: Moralis.Units.ETH(amount), receiver: to_address};
      let result = await Moralis.transfer(options).then(response => {
        console.log(response);
      }).catch(e => {
          console.error(e);
      });
    }

    getAvaxTransaction = async(txHash) => {
      const options = {
        chain: "avalanche testnet",
        transaction_hash: txHash
        };
      try{
        const transaction = await this.Moralis.Web3API.native.getTransaction(options);
        console.log("TransactionDetails: ", transaction);
      }
      catch (error) {
          console.error(error) // from creation or business logic
      }
      
    }
}