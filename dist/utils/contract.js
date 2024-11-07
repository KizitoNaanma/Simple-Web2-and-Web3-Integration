"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contract = void 0;
const ethers_1 = require("ethers");
const environment_1 = require("./environment");
(0, environment_1.loadEnvironment)();
const provider = new ethers_1.ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
const wallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = process.env.CONTRACT_ADDRESS;
const abi = [
    {
        "inputs": [],
        "name": "increment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
exports.contract = new ethers_1.ethers.Contract(contractAddress, abi, wallet);
//# sourceMappingURL=contract.js.map