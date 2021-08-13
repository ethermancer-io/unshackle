const { ThreeIdConnect, EthereumAuthProvider } = require('@3id/connect');

// window.onload = async function () {
// };

async function connect() {
  const addresses = await window.ethereum.enable();
  const threeIdConnect = new ThreeIdConnect();
  const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0]);
  await threeIdConnect.connect(authProvider);
  const provider = await threeIdConnect.getDidProvider();
  await browser.runtime.sendMessage({ message: 'Auth', provider });
}
