const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyContract", function () {
    it("Should return the initial message", async function () {
        const MyContract = await ethers.getContractFactory("MyContract");
        const contract = await MyContract.deploy("Hello, World!");
        await contract.deployed();

        expect(await contract.getMessage()).to.equal("Hello, World!");
    });

    it("Should update the message", async function () {
        const [owner] = await ethers.getSigners();
        const MyContract = await ethers.getContractFactory("MyContract");
        const contract = await MyContract.deploy("Hello, World!");
        await contract.deployed();

        await contract.setMessage("New Message");
        expect(await contract.getMessage()).to.equal("New Message");
    });

    it("Should prevent non-owners from updating the message", async function () {
        const [owner, other] = await ethers.getSigners();
        const MyContract = await ethers.getContractFactory("MyContract");
        const contract = await MyContract.deploy("Hello, World!");
        await contract.deployed();

        await expect(
            contract.connect(other).setMessage("Not Allowed")
        ).to.be.revertedWith("Not the contract owner");
    });
});
