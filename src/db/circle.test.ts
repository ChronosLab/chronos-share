import { createWalletSet } from "../app/commons/walletSet";
import { getCipherText } from "../app/commons/publicKey";
import { createWallet } from "../app/commons/wallet";

describe("Circle API", () => {
    let walletSetId: string;
    
    it("get public key", async () => {
        const result = await getCipherText();
        console.log(result);
    });

    it("create wallet set", async () => {
        walletSetId = await createWalletSet("Test");
        console.log(walletSetId);
    });

    it("create wallet", async () => {
        const wallets = await createWallet(2, walletSetId);
        console.log(wallets);
    });
});

