const hre = require("hardhat");

async function main() {
    const Chupala = await hre.ethers.getContractFactory("ChupaLa");

    const chupala_deploy = await Chupala.deploy();
    await chupala_deploy.deployed();

    console.log("Token deployed to:", chupala_deploy.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
