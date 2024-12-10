import { ethers, run } from "hardhat";
import { expect } from "chai";
import * as fs from "fs";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const outputFile = "./test-addresses.json";
  const deployedContracts: Record<string, string> = {};

  // Deploy OfferManager
  const OfferManager = await ethers.getContractFactory("OfferManager");
  const offerManager = await OfferManager.deploy();
  await offerManager.deployed();
  console.log("OfferManager deployed to:", offerManager.address);
  deployedContracts["OfferManager"] = offerManager.address;

  // Deploy LoanManager
  const LoanManager = await ethers.getContractFactory("LoanManager");
  const loanManager = await LoanManager.deploy();
  await loanManager.deployed();
  console.log("LoanManager deployed to:", loanManager.address);
  deployedContracts["LoanManager"] = loanManager.address;

  // Deploy FeeManager
  const FeeManager = await ethers.getContractFactory("FeeManager");
  const feeManager = await FeeManager.deploy();
  await feeManager.deployed();
  console.log("FeeManager deployed to:", feeManager.address);
  deployedContracts["FeeManager"] = feeManager.address;

  // Deploy LendingPool
  const LendingPool = await ethers.getContractFactory("LendingPool");
  const lendingPool = await LendingPool.deploy();
  await lendingPool.deployed();
  console.log("LendingPool deployed to:", lendingPool.address);
  deployedContracts["LendingPool"] = lendingPool.address;

  // Deploy PriceFeed
  const PriceFeed = await ethers.getContractFactory("PriceFeed");
  const priceFeed = await PriceFeed.deploy();
  await priceFeed.deployed();
  console.log("PriceFeed deployed to:", priceFeed.address);
  deployedContracts["PriceFeed"] = priceFeed.address;

  // Deploy Activity
  const Activity = await ethers.getContractFactory("Activity");
  const activity = await Activity.deploy();
  await activity.deployed();
  console.log("Activity deployed to:", activity.address);
  deployedContracts["Activity"] = activity.address;

  // Deploy Score
  const Score = await ethers.getContractFactory("Score");
  const score = await Score.deploy();
  await score.deployed();
  console.log("Score deployed to:", score.address);
  deployedContracts["Score"] = score.address;

  // Deploy LoanToValueRatio
  const LoanToValueRatio = await ethers.getContractFactory("LoanToValueRatio");
  const loanToValueRatio = await LoanToValueRatio.deploy();
  await loanToValueRatio.deployed();
  console.log("LoanToValueRatio deployed to:", loanToValueRatio.address);
  deployedContracts["LoanToValueRatio"] = loanToValueRatio.address;

  fs.writeFileSync(outputFile, JSON.stringify(deployedContracts, null, 2));
  console.log(`Deployed contract addresses saved to ${outputFile}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });