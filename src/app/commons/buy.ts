import { mintclub } from 'mint.club-v2-sdk'

export async function buyNFT(nftName: string, amount: number = 1, recipient: `0x${string}`) {
  try {
    return await mintclub
      .network('sepolia')
      .nft(nftName)
      .buy({
        amount: BigInt(amount),
        recipient,
        onError: (error) => {
          console.info(error)
        }
      })
  } catch (error) {
    console.error(error)
    throw new Error('Failed to buy NFT')
  }
}