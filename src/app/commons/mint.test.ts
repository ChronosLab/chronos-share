import { mintNFT } from "./mint";

describe('mint feature', () => {
    it('mint NFT', async () => {
        const result = await mintNFT('TEST1234', 'repository-images.githubusercontent.com/234710484/cdcc7000-3a0b-11ea-8f64-d9123b143b28');
        expect(result).toHaveProperty('blockNumber');
    });
});