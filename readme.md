Web3 test

This is an advanced Web3 project leveraging Hardhat, Ethers.js, and Next.js for interaction with Ethereum smart contracts.

## Installation

1. Install dependencies:
   ```bash
   npm install

2. Compile contracts:
   npx hardhat compile

3. run test
   npx hardhat test

4. Deploy to the network:
   npx hardhat run scripts/deploy.js --network rinkeby

5. Run the frontend:
   cd frontend
   npm run dev

## Features
- **Smart Contract:** Implements a message storage system with restricted access for updating the message.
- **Deployment:** Scripted deployment using Hardhat on Rinkeby Testnet.
- **Frontend:** React frontend to interact with the smart contract using ethers.js.
- **Testing:** Automated tests using Mocha and Chai.



