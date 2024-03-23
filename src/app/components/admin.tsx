// admin.tsx
import React, { useEffect, useState } from "react";
import { mintNFT } from "../commons/mint";

const AdminPage = () => {
  const [account, setAccount] = useState("");
  const [nftName, setNftName] = useState('');

  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected request:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const mint = async (nftName: string) => {
    try {
      const result = await mintNFT(nftName, "chronos-share.vercel.app/assets/ChronosLogo.png");
      console.log("Minted NFT:", result);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={connectWallet}>Connect to MetaMask</button>
      {account && <p>Connected with: {account}</p>}

      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>

      <input type="text" value={nftName} onChange={(e) => setNftName(e.target.value)} placeholder="Enter NFT Name" />
      <button onClick={() => mint(nftName)}>Mint NFT</button>
    </div>
  );
};

export default AdminPage;
