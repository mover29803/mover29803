const walletAddress = "0x3dF33E990390060DeB7a1CD2c2E79cbb1d97bBE3";

async function loadFunding() {
  const provider = new ethers.JsonRpcProvider("https://cloudflare-eth.com");

  const balance = await provider.getBalance(walletAddress);

  document.getElementById("raised").innerText =
    ethers.formatEther(balance);

  document.getElementById("investors").innerText = "Live";
}

loadFunding();
setInterval(loadFunding, 15000);