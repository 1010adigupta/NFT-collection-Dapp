require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://green-red-patron.ethereum-goerli.discover.quiknode.pro/8ed184641a3dc82ccf86d6f82cf26e4edd80635e/",
      accounts: ["33ebd749a686ea177e2bf1160a948b48a19c3ea636fd916e70248bbd7650b25e"],
    },
  },
};
