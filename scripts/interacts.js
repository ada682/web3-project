const Web3 = require('web3');
const { abi } = require('../abi/MyContractABI.json');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_KEY');
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const myContract = new web3.eth.Contract(abi, contractAddress);

const interact = async () => {
    const message = await myContract.methods.getMessage().call();
    console.log('Current message:', message);

    const accounts = await web3.eth.getAccounts();
    await myContract.methods.setMessage('New message!').send({ from: accounts[0] });
    console.log('Message updated!');
};

interact();
