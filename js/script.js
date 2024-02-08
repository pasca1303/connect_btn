const btn = document.querySelector(".connect__btn")

const connectWallet = async () => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    try {
      /* MetaMask is installed */
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts[0]);
      btn.innerHTML = (`Connected: ${accounts[0]} `)
    } catch (err) {
      console.error(err.message);
    }
  } else {
    /* MetaMask is not installed */
    console.log("Please install MetaMask");
  }
};





