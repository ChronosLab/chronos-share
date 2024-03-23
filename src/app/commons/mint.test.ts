import { mintNFT } from "./mint";

describe("mint feature", () => {
  it("mint NFT", async () => {
    const nft = await mintNFT(
      "Test",
      "repository-images.githubusercontent.com/234710484/cdcc7000-3a0b-11ea-8f64-d9123b143b28",
    );
    console.log(nft);
  });
});
