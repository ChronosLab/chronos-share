import { mintclub } from 'mint.club-v2-sdk'

export async function readNFT(nftName: string) {
  try {
    return await mintclub
      .network('sepolia')
      .nft(nftName)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to buy NFT')
  }
}