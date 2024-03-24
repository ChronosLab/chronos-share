import { mintclub } from 'mint.club-v2-sdk'

export async function mintNFT(nftName: string, symbolUri: string, nftSymbol: string, numberOfNfts: string, mintPrice: string) {
  try {
    console.log('mintNFT', nftName, symbolUri, numberOfNfts, mintPrice)
    return await mintclub
      .network('sepolia')
      .nft(nftSymbol)
      .create({
        name: nftName,
        reserveToken: {
          address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238', // USDC
          decimals: 6,
        },
        curveData: {
          curveType: 'FLAT',
          stepCount: 0, // how granular the curve is
          maxSupply: Number(numberOfNfts), // NFT max supply
          initialMintingPrice: Number(mintPrice), // starting price, 0.001 WETH
          finalMintingPrice: Number(mintPrice), // ending price, 0.001 WETH
          creatorAllocation: 0, // initial supply to the deployer
        },
        metadataUrl: `https://${symbolUri}`,
        onError: (error) => {
          console.info(error)
        }
      })
  } catch (error) {
    console.error(error)
    throw new Error('Failed to mint NFT')
  }
}
