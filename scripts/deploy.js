const hre = require("hardhat");

async function main() {
  const Report = await ethers.deployContract("election"); //fetching bytecode and ABI
  console.log("Token address:", await Report.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

