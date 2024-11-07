# Web2-Web3 Technical Assessment

## Overview
This project demonstrates the integration of Web2 and Web3 technologies using Node.js, TypeScript, Express, GraphQL, and MongoDB. The application interacts with a deployed Ethereum smart contract on the Sepolia testnet and a MongoDB database.

## Features
- **Web2 Interaction**: CRUD operations for a user database using MongoDB.
- **Web3 Interaction**: Interact with an Ethereum smart contract (increment a counter and fetch its value).
- **GraphQL API**: Expose the functionalities through a GraphQL API.

## Technologies
- **Node.js**: Backend runtime environment.
- **TypeScript**: Typed superset of JavaScript.
- **Express**: Web framework for Node.js.
- **GraphQL**: Query language for APIs.
- **MongoDB**: NoSQL database.
- **Ethers.js**: Library for interacting with the Ethereum blockchain.

## Prerequisites
- **Node.js**: v16 or higher
- **NPM**: v8 or higher
- **MongoDB**: Installed and running locally or use MongoDB Atlas
- **Infura Project ID**: Sign up for an Infura account to get a Project ID
- **Ethereum Wallet**: Private key with Sepolia testnet funds

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/KizitoNaanma/Simple-Web2-and-Web3-Integration.git
   cd Simple-Web2-and-Web3-Integration
  
2.  **Install Dependencies**:
    ```bash
    npm install
  
3. **Set Up Environment Variables**: Create a `.env` file in the root directory and add the following:
    
    ```plaintext    
    MONGODB_URI=mongodb://localhost:27017/mydatabase
    INFURA_PROJECT_ID=YOUR_INFURA_PROJECT_ID
    PRIVATE_KEY=YOUR_PRIVATE_KEY
    CONTRACT_ADDRESS=YOUR_DEPLOYED_CONTRACT_ADDRESS
    
4.  **Run the Application**:
    ```bash
    npm start
  
## Queries

-   **Fetch All Users**: 
    ```graphql
    query {
      users {
        id
        name
        email
      }
    }
        
-   **Fetch Counter Value**:
    ```graphql
    query {
      getCount
    }
        

## Mutations

-   **Create a New User**:
    ```graphql
    mutation {
      createUser(name: "John Doe", email: "john@example.com") {
        id
        name
        email
      }
    }
        
-   **Increment Counter**:
    ```graphql
    mutation {
      incrementCounter
    }
