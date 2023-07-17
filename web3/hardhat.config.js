/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'arbitriumGoerli',
    networks: {
      hardhat: {},
      arbitriumGoerli: {
        url: 'https://goerli-rollup.arbitrum.io/rpc',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};