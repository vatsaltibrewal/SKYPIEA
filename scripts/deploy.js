const hre = require("hardhat");

async function main() {
    const Election = await ethers.getContractFactory("election"); // assuming "Election" is the name of your contract
    const election = await Election.deploy(); // Deploying the contract
    await election.deployed(); // Wait for the contract to be deployed
    console.log("Election address:", election.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x61a5AdE5e66AD3ED620eeD984201899B58e83b04