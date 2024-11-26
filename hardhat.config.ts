import { task, type HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
// import { constants } from "./lib/constants";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },

  // networks: {
  //   sepolia: {
  //     // url: "https://ethereum-sepolia-rpc.publicnode.com",
  //     url: constants.integrations.alchemy.sepolia,
  //     accounts: [constants.account.deployerPrivateKey],
  //   }
  // },
};

// task action function receives the Hardhat Runtime Environment as second argument
task(
  "blockNumber",
  "Prints the current block number",
  async (_, { ethers }) => {
    const blockNumber = await ethers.provider.getBlockNumber();
    console.log("Current block number: " + blockNumber);
  }
);


export default config;
