import { HardhatUserConfig, task } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import "hardhat-abi-exporter";

import { utils, Wallet } from "ethers";
import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/.env` });

import "./tasks/index";

const PRIVATE_KEY = process.env.PRIVATE_KEY || (Wallet.createRandom()).privateKey;
const RPC_URL = process.env.RPC_URL;
const BSCSCAN_KEY = process.env.BSCSCAN_KEY;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
     compilers: [
       {
          version: '0.8.4',
          settings: {
             optimizer: {
                enabled: true,
                runs: 50000,
             },
             viaIR: true,
          },
       },
       {
          version: '0.8.20',
          settings: {
             optimizer: {
                enabled: true,
                runs: 50000,
             },
             viaIR: true,
          },
       },
       {
          version: '0.8.17',
          settings: {
             optimizer: {
                enabled: true,
                runs: 50000,
             },
             viaIR: true,
          },
       },
    ],
  },
  networks: {
    hardhat: {
      gasPrice: 500000000000,
    },
    bscMainnet: {
      url: `https://bsc-rpc.publicnode.com`,
      chainId: 56,
      accounts: [PRIVATE_KEY],
      // gasPrice: utils.parseUnits("150", "gwei").toNumber(),
    },
    bscTestnet: {
      url: 'https://bsc-testnet-rpc.publicnode.com',
      chainId: 97,
      accounts: [PRIVATE_KEY],
      gasPrice: 5000000000,
    }
  },
  etherscan: {
    apiKey: {
      bscTestnet: '4E2MKV2JQF5YJSZP6QBW1EUP8Q8UNMUFIV'
    },
  },
 sourcify: {
    enabled: false,
 },
  abiExporter: {
      path: "./dist/abi",
      clear: false,
      flat: true
    },
    typechain: {
      outDir: './dist/types',
      target: 'ethers-v5',
    },
  };

export default config;