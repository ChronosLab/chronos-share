import React, { useState } from "react";
import Navbar from "@/app/components/navbar";
import { mintNFT } from "@/app/commons/mint";
import { readNFT } from "@/app/commons/read";
import { buyNFT } from "@/app/commons/buy";

const Page: React.FC = () => {
  const [account, setAccount] = useState("");
  const [nftName, setNftName] = useState("");
  const [nftAmount, setNftAmount] = useState("1");
  const [nftPrice, setNftPrice] = useState("1");
  const [nftSymbol, setNftSymbol] = useState("");
  const [buyTokenSymbol, setBuyTokenSymbol] = useState("");
  const [buyTokenAmount, setBuyTokenAmount] = useState("1");
  const [mintSuccess, setMintSuccess] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [nftAddresses, setNftAddresses] = useState<Set<string>>(new Set());

  const mint = async (nftName: string, nftSymbol: string, nftAmount: string, nftPrice: string) => {
    try {
      console.log("Minting NFT:", nftName);
      const result = await mintNFT(
        nftName,
        "https://raw.seadn.io/files/2e35f09a9ed211e3f45f469e78c30a46.png",
        nftSymbol,
        nftAmount,
        nftPrice,
      );
      console.log("Minted NFT:", result);
      if (result && result.status === "success") {
        setMintSuccess(true);
        setTxHash(result.transactionHash);
      }
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };
  const read = async (nftName: string) => {
    try {
      const nft = await readNFT(nftName);
      const address = await nft.getBondAddress();
      console.log("NFT Address:", address);
      addNftAddress(address);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  const buy = async (nftName: string, account: `0x${string}`, buyTokenAmount: string) => {
    try {
      console.log("Buying NFT:", nftName);
      const result = await buyNFT(nftName, buyTokenAmount, account);
      console.log("Bought NFT:", result);
    } catch (error) {
      console.error("Error buying NFT:", error);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Connected:", accounts[0]);
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected request:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const addNftAddress = (newAddress: string) => {
    setNftAddresses((prevAddresses) => {
      const updatedAddresses = new Set(prevAddresses);
      updatedAddresses.add(newAddress);
      return updatedAddresses;
    });
  };

  const formatAddress = (address: string) => `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {mintSuccess && (
        <div className="w-full flex justify-center items-center">
          <div role="alert" className="flex justify-center items-center alert alert-success mt-6 mx-6 w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Your NFT has been minted! Transaction:{" "}
              <a
                href={`https://sepolia.etherscan.io/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                {txHash.substring(0, 20)}...
              </a>
            </span>
          </div>
        </div>
      )}

      <div className="container mx-auto w-1/2">
        {account ? (
          <div className="collapse bg-base-200 w-80 mt-6">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <span>Connected with: {formatAddress(account)}</span>
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>Your NFT:</p>
            </div>
          </div>
        ) : (
          <button className="btn btn-info my-4" onClick={connectWallet}>
            Connect to MetaMask
          </button>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter NFT Name(30):</span>
          </label>
          <input
            type="text"
            value={nftName}
            onChange={(e) => setNftName(e.target.value)}
            placeholder="NFT Name"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Enter NFT Symbol(10):</span>
          </label>
          <input
            type="text"
            value={nftSymbol}
            onChange={(e) => setNftSymbol(e.target.value)}
            placeholder="NFT Symbol"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Enter NFT Amount:</span>
          </label>
          <input
            type="text"
            value={nftAmount}
            onChange={(e) => setNftAmount(e.target.value)}
            placeholder="1"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Enter NFT Price (USDC):</span>
          </label>
          <input
            type="text"
            value={nftPrice}
            onChange={(e) => setNftPrice(e.target.value)}
            placeholder="1"
            className="input input-bordered"
          />
        </div>

        <button className="btn btn-primary my-4" onClick={() => mint(nftName, nftSymbol, nftAmount, nftPrice)}>
          Mint NFT
        </button>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Buy Symbol Name:</span>
          </label>
          <input
            type="text"
            value={buyTokenSymbol}
            onChange={(e) => setBuyTokenSymbol(e.target.value)}
            placeholder="Token Name"
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Enter Buy Token Amount:</span>
          </label>
          <input
            type="text"
            value={buyTokenAmount}
            onChange={(e) => setBuyTokenAmount(e.target.value)}
            placeholder="1"
            className="input input-bordered"
          />
        </div>

        <button
          className="btn btn-secondary my-4"
          onClick={() => buy(buyTokenSymbol, account as `0x${string}`, buyTokenAmount)}
        >
          Buy NFT
        </button>
      </div>
    </div>
  );
};

export default Page;
