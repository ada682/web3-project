import { useState } from 'react';
import { ethers } from 'ethers';
import MyContractABI from '../abi/MyContractABI.json';

export default function Home() {
    const [message, setMessage] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const [contract, setContract] = useState(null);

    const loadContract = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = "YOUR_CONTRACT_ADDRESS";
        const myContract = new ethers.Contract(contractAddress, MyContractABI.abi, signer);
        setContract(myContract);

        const message = await myContract.getMessage();
        setMessage(message);
    };

    const updateMessage = async () => {
        if (contract) {
            await contract.setMessage(newMessage);
            setMessage(newMessage);
        }
    };

    return (
        <div>
            <h1>Web3 High-End Project</h1>
            <p>Current message: {message}</p>
            <input 
                type="text" 
                value={newMessage} 
                onChange={(e) => setNewMessage(e.target.value)} 
                placeholder="Enter new message"
            />
            <button onClick={updateMessage}>Update Message</button>
            <button onClick={loadContract}>Load Contract</button>
        </div>
    );
}
