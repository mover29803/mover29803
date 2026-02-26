const btn = document.getElementById("connectBtn");
const walletText = document.getElementById("wallet");

btn.onclick = async () => {
  if (!window.ethereum) {
    alert("Install MetaMask");
    return;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();

  walletText.innerText = "Connected: " + address;
};