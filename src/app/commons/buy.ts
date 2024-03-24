import {mintclub, wei} from 'mint.club-v2-sdk'

export async function buyNFT(nftSymbol: string, amount: string, address: `0x${string}`) {
    try {
        return await mintclub
            .network('sepolia')
            .nft(nftSymbol)
            .buy({
                amount: BigInt(amount),
                recipient: address,
                onError: (error) => {
                    console.info(error)
                }
            })
    } catch (error) {
        console.error(error)
        throw new Error('Failed to buy NFT')
    }
}