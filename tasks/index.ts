import { task } from 'hardhat/config'
import { Logger } from 'tslog'
import config from './config'

const logger: Logger = new Logger()

task("verify-1", "")
    .setAction(
        async (args, hre) => {
            await hre.run("verify:verify", {
                address: config.OfferManager,
                contract: "contracts/managers/OfferManager.sol:OfferManager"
            });
        }
    );

task("verify-2", "")
    .setAction(
        async (args, hre) => {
            await hre.run("verify:verify", {
                address: config.LoanManager,
                contract: "contracts/managers/LoanManager.sol:LoanManager"
            });
        }
    );

task("verify-3", "")
.setAction(
    async (args, hre) => {
        await hre.run("verify:verify", {
            address: config.FeeManager,
            contract: "contracts/managers/FeeManager.sol:FeeManager"
        });
    }
);

task("verify-4", "")
.setAction(
    async (args, hre) => {
        await hre.run("verify:verify", {
            address: config.LendingPool,
            contract: "contracts/LendingPool.sol:LendingPool"
        });
    }
);

task("verify-5", "")
.setAction(
    async (args, hre) => {
        await hre.run("verify:verify", {
            address: config.PriceFeed,
            contract: "contracts/PriceFeed.sol:PriceFeed"
        });
    }
);

task("verify-6", "")
    .setAction(
        async (args, hre) => {
            await hre.run("verify:verify", {
                address: config.Activity,
                contract: "contracts/Activity.sol:Activity"
            });
        }
    );

task("verify-7", "")
    .setAction(
        async (args, hre) => {
            await hre.run("verify:verify", {
                address: config.Score,
                contract: "contracts/Score.sol:Score"
            });
        }
    );

task("verify-8", "")
.setAction(
    async (args, hre) => {
        await hre.run("verify:verify", {
            address: config.LoanToValueRatio,
            contract: "contracts/LoanToValueRatio.sol:LoanToValueRatio"
        });
    }
);