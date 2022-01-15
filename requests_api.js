const options = {method: 'GET'};

fetch('https://testnets-api.opensea.io/asset_contract/0x06012c8cf97bead5deae237070f9587f8e7a266d', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));