import { mintclub } from 'mint.club-v2-sdk'
import { ethers } from 'ethers'

export async function sell(nftName: string, amount: number = 1, recipient: `0x${string}`) {
  try {
    return await mintclub
      .network('sepolia')
      .nft(nftName)
      .sell({
        amount: ethers.parseEther(amount.toString()),
        recipient,
        onError: (error) => {
          console.info(error)
        }
      })
  } catch (error) {
    console.error(error)
    throw new Error('Failed to sell NFT')
  }
}