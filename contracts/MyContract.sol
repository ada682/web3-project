// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string private message;
    address public owner;

    event MessageUpdated(string oldMessage, string newMessage);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(string memory initialMessage) {
        message = initialMessage;
        owner = msg.sender;
    }

    function setMessage(string memory newMessage) public onlyOwner {
        string memory oldMessage = message;
        message = newMessage;
        emit MessageUpdated(oldMessage, newMessage);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
