const hre = require("hardhat");


async function main() {
 const chai = await hre.ethers.getContractFactory("contract name");
 const contract = await contact_name.deply(); //instance of contract 


 await contract.deployed();
 console.log(" Address of contract" , contract.address);
}
main().catch((error) => {
  console.error(error);
process.exitCode = 1; 
});