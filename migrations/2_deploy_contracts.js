const Pool = artifacts.require("./Pool");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(Pool);
  })
};