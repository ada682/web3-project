const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);

    const MyContract = await ethers.getContractFactory("MyContract");
    const contract = await MyContract.deploy("Initial Message");

    console.log("Contract deployed at address:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
