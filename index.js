// index.js

const Web3 = require('web3');

class Web3Tools {
    constructor(providerUrl, timeout = 10000) {
        // Initialize Web3 instance
        this._web3 = new Web3(providerUrl, { timeout });
    }

    // Fetch transaction receipt by transaction hash
    async fetchTransactionReceipt(txHash) {
        try {
            return await this._web3.eth.getTransactionReceipt(txHash);
        } catch (error) {
            console.error('Error fetching transaction receipt:', error);
            throw error;
        }
    }

    // Fetch block details by block number
    async fetchBlockDetails(blockNumber) {
        try {
            return await this._web3.eth.getBlock(blockNumber);
        } catch (error) {
            console.error('Error fetching block details:', error);
            throw error;
        }
    }

    // Estimate gas usage for a transaction object
    async estimateGasUsage(txObject) {
        try {
            return await this._web3.eth.estimateGas(txObject);
        } catch (error) {
            console.error('Error estimating gas usage:', error);
            throw error;
        }
    }

    // Fetch current gas price
    async fetchGasPrice() {
        try {
            return await this._web3.eth.getGasPrice();
        } catch (error) {
            console.error('Error fetching gas price:', error);
            throw error;
        }
    }

    // Fetch user accounts
    async fetchUserAccounts() {
        try {
            return await this._web3.eth.getAccounts();
        } catch (error) {
            console.error('Error fetching user accounts:', error);
            throw error;
        }
    }

    // Deploy contract with given ABI, bytecode, from address, and gas
    async deployContract(abi, bytecode, from, gas) {
        try {
            const contract = new this._web3.eth.Contract(abi);
            const deployment = contract.deploy({ data: bytecode });
            return await deployment.send({ from, gas });
        } catch (error) {
            console.error('Error deploying contract:', error);
            throw error;
        }
    }

    // Fetch network ID
    async fetchNetworkId() {
        try {
            return await this._web3.eth.net.getId();
        } catch (error) {
            console.error('Error fetching network ID:', error);
            throw error;
        }
    }

    // Fetch latest block number
    async fetchLatestBlockNumber() {
        try {
            return await this._web3.eth.getBlockNumber();
        } catch (error) {
            console.error('Error fetching latest block number:', error);
            throw error;
        }
    }

    // Fetch transaction count for a block
    async fetchBlockTransactionCount(blockNumber) {
        try {
            return await this._web3.eth.getBlockTransactionCount(blockNumber);
        } catch (error) {
            console.error('Error fetching transaction count for block:', error);
            throw error;
        }
    }
}

module.exports = Web3Tools;
