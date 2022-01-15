export default class NFT{
	getNfts = async(eth_address, chain) => {

        try{
			let nfts = await Moralis.Web3API.account.getNFTs({address: eth_address, chain: chain});
            console.log("nfts: ", JSON.stringify(nfts));
            return JSON.stringify(nfts);
		}

		catch (error) {
		    console.error(error); // from creation or business logic
		}
		
	}

	getCollections = async(contract_address, chain) => {
		const options = {chain: chain, address: contract_address};
        try{
            let collection = Moralis.Web3API.token.getAllTokenIds(options);
            console.log("Collections: ", collection);
            return JSON.stringify(collection);
        }

        catch (error) {
		    console.error(error); // from creation or business logic
		}
	}

	getCollectionMeta = async(contract_address, chain) => {
		const options = {chain: chain, address: contract_address};
        try{
            let collection_meta = Moralis.Web3API.token.getNFTMetadata(options);
            console.log("CollectionMeta: ", collection_meta);
            return JSON.stringify(collection_meta);
        }
		
        catch (error) {
		    console.error(error); // from creation or business logic
		}
	}

	queryString = async(query, chain) => {
		const options = { q: query, chain: "bsc", filter: "name", limit: 5};
        try{
            const NFTs = await Moralis.Web3API.token.searchNFTs(options);
            console.log("queryResults: ", NFTs);
            return JSON.stringify(NFTs);
        }

        catch (error) {
		    console.error(error); // from creation or business logic
		}
	}

	getNftTransfers = async(eth_address, chain) => {
		try{
			const options = { chain: chain, address: eth_address, limit: "3" };
			const transfersNFT = await Moralis.Web3API.account.getNFTTransfers(options);
			console.log("NftTransfers: ", JSON.stringify(transfersNFT));
            return JSON.stringify(transfersNFT);
		}

		catch (error) {
		    console.error(error); // from creation or business logic
		}
	}

	getNftsForContract = async(eth_address, contract_address, chain) => {
		try{
			const options = { chain: chain, address: eth_address, token_address: contract_address};
			const polygonNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
			console.log("ContractNfts: ", JSON.stringify(polygonNFTs));
            return JSON.stringify(polygonNFTs);
		}

		catch (error) {
		    console.error(error); // from creation or business logic
		}
	}

	getTokenBalances = async(eth_address, chain) => {
		try{
			const options = { chain: chain, address: eth_address}
			const balances = await Moralis.Web3API.account.getTokenBalances(options);
            return JSON.stringify(balances);
		}

		catch (error) {
		    console.error(error); // from creation or business logic
		}
	}

	
}

// module.exports.NFT = NFT;