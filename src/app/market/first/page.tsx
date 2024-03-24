"use client"

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const mockNFTs = [
    {
      id: 1,
      nftSymbol: "T01",
      nftName: "Test01",
      imageUrl:
        "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
      nftPrice: "0.001 USDC",
    },
    {
      id: 2,
      nftSymbol: "T02",
      nftName: "Test02",
      imageUrl:
        "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
      nftPrice: "0.001",
    },
    {
      id: 3,
      nftSymbol: "T03",
      nftName: "Test03",
      imageUrl:
        "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
      nftPrice: "0.001 USDC",
    },
    {
      id: 4,
      nftSymbol: "T04",
      nftName: "Test04",
      imageUrl:
        "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
      nftPrice: "0.0001 USDC",
    },
    {
      id: 5,
      nftSymbol: "T05",
      nftName: "Test05",
      imageUrl:
        "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
      nftPrice: "0.0001 USDC",
    },
    {
      id: 6,
      nftSymbol: "T06",
      nftName: "Test06",
      imageUrl:
        "https://mint.club/_next/image?url=https%3A%2F%2Fcf-ipfs.com%2Fipfs%2FQmRf81GPfvH2n7vPvg5ztY3s2HSdrC9hZjmqbm9qbMd8zh&w=640&q=75",
      nftPrice: "0.0001 USDC",
    },
  ];

  const router = useRouter();
  const createQueryString = (name: any, value: any) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };
  const handleBuyNowClick = () => {
    router.push("/market/" + "?" + createQueryString("redirectPath", "/market/second"));
  };

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {mockNFTs.map((nft) => (
          <div key={nft.id} className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={nft.imageUrl} alt={nft.nftSymbol} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{nft.nftSymbol}</h2>
              <p>{nft.nftName}</p>
              <p className="font-bold">{nft.nftPrice}</p>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={handleBuyNowClick}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Page;
