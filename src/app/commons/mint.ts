import { mintclub } from 'mint.club-v2-sdk'
import { ethers } from 'ethers'

export async function mintNFT(nftName: string, symbolUri: string, numberOfNfts: number = 1, mintPrice: number = 0.001) {

  const privateKey = process.env.PRIVATE_KEY!;
  const wallet = new ethers.Wallet(privateKey);
  console.log(wallet)
  
  const providerUrl = process.env.PROVIDER_URL
  const provider = new ethers.JsonRpcProvider(providerUrl);

  // const provider = new ethers.AlchemyProvider(`https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, 'sepolia');
  // wallet.connect(provider)
  console.log(provider)
  console.log(process.env.ALCHEMY_API_KEY)
  const address = await mintclub.wallet.connect(provider); 

  const nft = mintclub
    .network('sepolia')
    .nft(nftName)
    .create({
      name: nftName,
      // Base Network WETH
      reserveToken: {
        address: '0x4200000000000000000000000000000000000006',
        decimals: 18,
      },
      curveData: {
        curveType: 'FLAT',
        stepCount: 10, // how granular the curve is
        maxSupply: 10_000, // NFT max supply
        initialMintingPrice: mintPrice, // starting price, 0.001 WETH
        finalMintingPrice: mintPrice, // ending price, 0.001 WETH
        creatorAllocation: numberOfNfts, // initial supply to the deployer
      },
      metadataUrl: `https://${symbolUri}`,
      onError: (error) => {
        console.info(error)
      }
  }) 
  
}


function https(arg0: string): import("viem").TransportConfig<string, import("viem").EIP1193RequestFn> & Record<string, any> {
  throw new Error('Function not implemented.');
}

