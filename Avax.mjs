import * as axios from 'axios';

class Avax{

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
    getAvaxBalanceByAddress = async(eth_address) => {
        const url = "https://deep-index.moralis.io/api/v2/";
        const account_url = url + eth_address + 'balance?chain=avalanche%20testnet';
        console.log("account_url: ", account_url);
        axios.get(account_url, this.params)
        .then(res => {
        //   console.log("type: ", typeof(JSON.stringify(res.data)));
          console.log("Account Balance: ", JSON.stringify(res.data));
        //   const filename = "balance.json";
        //   fs.writeFile (filename, JSON.stringify(res.data, null, 4), 'utf-8', function(err) {
        //     if (err) throw err;
        //     console.log(filename + ' has been created.');
        //   });
        })
        .catch(err => {
          console.error(err); 
        })
      }

    sendAvax = async(to_address, amount) => {
		// sending 0.5 ETH
		const options = {type: "avalanche testnet", amount: this.Moralis.Units.ETH(amount), receiver: to_address};
		try{
			let result = await this.Moralis.transfer(options);
			console.log("TransactionDetails: ", result);
			return JSON.stringify(result);
		}
		
		catch (error) {
		    console.error(error) // from creation or business logic
		}
	}

}