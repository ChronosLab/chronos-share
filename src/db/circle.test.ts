import { createWalletSet } from "../app/commons/walletSet";
import { getAppId } from "../app/commons/publicKey";
import { acquireToken, createChallenge, createUser, createWallet, initUser } from "../app/commons/wallet";
import { createTransaction } from "../app/commons/transaction";

describe("Circle API", () => {
    let walletSetId: string;
    let walletId: string
    
    it("get appid", async () => {
        const result = await getAppId();
        console.log('appId', result);
    });

    it("create user", async () => {
        const result = await createUser('test1123');
        console.log('user', result);
        const result3 = await initUser('test1123');
        console.log('challenge id', result3);
        const result4 = await createChallenge('test1123');
        console.log('challenge id', result4);
    });

    // it("create wallet set", async () => {
    //     walletSetId = await createWalletSet("Test");
    //     console.log('walletSet', walletSetId);
    // });

    // it("create wallet", async () => {
    //     const wallets = await createWallet(2, walletSetId);
    //     console.log('wallet', wallets);
    //     walletId = wallets[0].id;
    // });

    it("create transaction", async () => {
        // const tra = await createTransaction(walletId);
    });
});

