import { mintclub } from 'mint.club-v2-sdk'

export async function mintNFT(nftName: string, symbolUri: string, numberOfNfts: number = 20, mintPrice: number = 0.001) {
  try {
    console.log('mintNFT', nftName, symbolUri, numberOfNfts, mintPrice)
    return await mintclub
      .network('sepolia')
      .nft(nftName)
      .create({
        name: nftName,
        reserveToken: {
          address: '0xFA0bd2B4d6D629AdF683e4DCA310c562bCD98E4E', // USDC
          decimals: 6,
        },
        curveData: {
          curveType: 'FLAT',
          stepCount: 10, // how granular the curve is
          maxSupply: 100, // NFT max supply
          initialMintingPrice: mintPrice, // starting price, 0.001 WETH
          finalMintingPrice: mintPrice, // ending price, 0.001 WETH
          creatorAllocation: numberOfNfts, // initial supply to the deployer
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
