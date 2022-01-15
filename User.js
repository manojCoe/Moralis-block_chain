export default class User{
	signup = async(username, email, password, account) => {
		const user = new Moralis.User();
		user.set("username", username);
		user.set("password", password);
		user.set("email", email);
		user.set("accounts", account);
		try {
		  await user.signUp();
		  console.log("User");
		  console.log(user);
		} catch (error) {
		  alert("Error: " + error.code + " " + error.message);
		}
	
	}

	login = async () => {
		try {
			const user = await Moralis.Web3.authenticate();
			console.log("logged in user:", user);
			
		} catch (error) {
			const code = error.code;
			const message = error.message;
			console.log("error code: ", code);
			console.log("error message: ", message);
		}
	}
	
	signin = async(email, password) => {
		try {
		  const user = await Moralis.User.logIn(email, password);
		  console.log("logged in user:", JSON.stringify(user));
		  return user;
		} catch (error) {
		  alert("Error: " + error.code + " " + error.message);
		}
	
	}

	// createUser = async() => {
	// 	await this.Moralis.Web3.authenticate()
	// 	.then(async function (user) {
	// 		let _username = document.getElementById('user-name').value;
	// 		let _email = document.getElementById('user-mail').value;
	// 		if(_username != '' || _email != ''){
	// 			if(_username != ''){user.set("name", _username);}
	// 			if(_email != ''){user.set("email", _email);}
	// 			await user.save();
	// 		}
	// 		window.location.href = "dashboard.html";
	// 	})
	// }

	getUserById = async(userId) => {
        try{
            const query = new Moralis.Query('User');
            query.equalTo("ethAddress", userId);
            const user = await query.first();
            console.log("userDetails: ", JSON.stringify(user));
        }
        catch (error) {
            alert("Error: " + error.code + " " + error.message);
          }
		
	}

	getAllUsers = async() => {
		const query = new Moralis.Query('User');
		const results = await query.find();
		console.log("Results: ", results);
		alert("Successfully retrieved " + results.length + " records.");
		// for(let i = 0; i<results.length; i++){
		// 	const ob = results[i];
		// 	console.log("user id: ", ob.id);
		// 	console.log("className: ", ob.className);
		// 	console.log("attributes: ", ob.attributes);
		// 	console.log("accounts: ", ob.attributes.accounts);
		// }
		
	}

	getAccountBalance = async(eth_address, chain) => {
		// get BSC native balance for a given address
		const options = { chain: chain, address: eth_address};
		const balance = await Moralis.Web3API.account.getNativeBalance(options);
		console.log("AccountBalance: ", balance);
	}
	
	getUserTransactions = async(eth_address, chain) => {
		
	}

	currUser = async() => {
		const user = await Moralis.User.current();
		if (user == null)
		{
			console.log("User is not logged in.");
			return null;
		}
		const accounts = user.get('accounts');
		const userAddress = user.get('ethAddress');
		console.log("User: ", user);
		console.log("Accounts: ", accounts);
		console.log("Address: ", userAddress);
		return user;
	}

	logout = async () => {
		await Moralis.User.logOut();
		console.log("User is logged out.");
	}
}

// module.exports.User = User;