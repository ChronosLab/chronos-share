"use client";
import React, {useState} from "react";
import Navbar from "@/app/components/navbar";

const Page: React.FC = () => {
    const mockNFTs = [
        {
            id: 1,
            nftSymbol: "T01",
            nftName: "Test01",
            imageUrl: "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
            nftPrice: "0.001",
            newPrice: "0.0005"
        },
        {
            id: 2,
            nftSymbol: "T02",
            nftName: "Test02",
            imageUrl: "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
            nftPrice: "0.001",
            newPrice: "0.01"
        },
        {
            id: 3,
            nftSymbol: "T03",
            nftName: "Test03",
            imageUrl: "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
            nftPrice: "0.001",
            newPrice: "0.0005"
        },
        {
            id: 4,
            nftSymbol: "T04",
            nftName: "Test04",
            imageUrl: "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
            nftPrice: "0.0001",
            newPrice: "1"
        },
        {
            id: 5,
            nftSymbol: "T05",
            nftName: "Test05",
            imageUrl: "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
            nftPrice: "0.0001",
            newPrice: "0.1"
        },
        {
            id: 6,
            nftSymbol: "T06",
            nftName: "Test06",
            imageUrl: "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
            nftPrice: "0.0001",
            newPrice: "100"
        }
    ];
    return (
        <div className="flex flex-col min-h-screen items-center">
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {mockNFTs.map((nft) => {
                    const priceIncrease = parseFloat(nft.newPrice) > parseFloat(nft.nftPrice);
                    return (
                        <div key={nft.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={nft.imageUrl} alt={nft.nftSymbol} className="rounded-xl"/>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{nft.nftSymbol}</h2>
                                <p>{nft.nftName}</p>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="font-bold">{nft.nftPrice} USDC</span>
                                    {priceIncrease ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    )}
                                    <span
                                        className={`font-bold ${priceIncrease ? "text-green-500" : "text-red-500"}`}>{nft.newPrice} USDC</span>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Page;

