"use client";
import React, { useState } from "react";
import { mintNFT } from "../commons/mint";
import { buyNFT } from "../commons/buy";
import { readNFT } from "../commons/read";

const Admin = () => {
  const [account, setAccount] = useState("");
  const [nftAddress, setNftAddress] = useState("");
  const [nftName, setNftName] = useState("");
  const [recipient, setRecipient] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Connected:", accounts[0])
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
      console.log("Minting NFT:", nftName);
      const result = await mintNFT(nftName, "chronos-share.vercel.app/assets/ChronosLogo.png");
      console.log("Minted NFT:", result);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  const read = async (nftName: string) => {
    try {
      const nft = await readNFT(nftName);
      const address = await nft.getBondAddress();
      console.log("NFT Address:", address);
      setNftAddress(address);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  const buy = async (nftName: string, account: `0x${string}`) => {
    try {
      console.log("Buying NFT:", nftName);
      const result = await buyNFT(nftName, 1, account);
      console.log("Bought NFT:", result);
    } catch (error) {
      console.error("Error buying NFT:", error);
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

      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>

      <button onClick={() => read(nftName)}>READ NFT</button>
      {nftAddress && <p>NFT Address: {nftAddress}</p>}

      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>
      <p>SPACE</p>

      <input type="text" value={nftName} onChange={(e) => setNftName(e.target.value)} placeholder="Enter NFT Name" />
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Enter Recipient"
      />
      <button onClick={() => buy(nftName, recipient as `0x${string}`)}>Buy NFT</button>
    </div>
  );
};

export default Admin;
