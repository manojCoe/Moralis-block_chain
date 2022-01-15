export default class Ethereum {

    constructor(Moralis){
        this.Moralis = Moralis;
    }

	getEthAddresses = async() => {
		const query = new this.Moralis.Query('_EthAddress');
		try{
			const results = await query.first();
		alert("Successfully retrieved " + results.length + " records.");
		// for(let i = 0; i<results.length; i++){
		// 	const ob = results[i];
		// 	console.log(ob);
		// }
		console.log("Addresses: ", JSON.stringify(results));
		return JSON.stringify(results);
		}

		catch (error) {
		    console.error(error); // from creation or business logic
		}
		
	}

	sendEth = async(to_address, amount) => {
		// sending 0.5 ETH
		const options = {type: "native", amount: this.Moralis.Units.ETH(amount), receiver: to_address};
		try{
			let result = await this.Moralis.transfer(options);
			console.log("TransactionDetails: ", result);
			return JSON.stringify(result);
		}
		
		catch (error) {
		    console.error(error) // from creation or business logic
		}
	}

	getAllEthBalance = async() => {
		const query = new this.Moralis.Query('EthBalance');
		try{
			const results = await query.find();
			// console.log("AvaxBalance: ", results);
			alert("Successfully retrieved " + results.length + " records.");
			for(let i = 0; i<results.length; i++){
				const ob = results[i];
				console.log(ob);
			}

			return JSON.stringify(results);
		}
		
		catch (error) {
		    console.error(error); // from creation or business logic
		}
	}

	getNativeTransaction = async(txHash, chain) => {
		const options = {
			chain: "bsc",
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

	getEthBalanceByAddress = async(eth_address) => {
		const query = new this.Moralis.Query('EthBalance');
		query.equalTo("attributes.address", eth_address);
		// console.log("query: ", query);
		try{
			const results = await query.first();
			console.log("Eth Balance: ", JSON.stringify(results));
			return JSON.stringify(results);
		}

		catch (error) {
		    console.error(error); // from creation or business logic
		}
		
		
		
	}
	
	getAllEthTransactions = async() => {
		const query = new this.Moralis.Query('EthTransactions');

		try{
		const results = await query.find();
		
		alert("Successfully retrieved " + results.length + " records.");
		console.log("EthTransactions: ", JSON.stringify(results));
		// for(let i = 0; i<results.length; i++){
		// 	const ob = results[i];
		// 	console.log(ob);
		// }
		return JSON.stringify(results);
		}
		

		catch (error) {
		    console.error(error); // from creation or business logic
		}
	}
}

// module.exports.Ethereum = Ethereum;