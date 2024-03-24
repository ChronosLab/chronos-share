"use client";
import React, { useState } from "react";
import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";
import { getAppId } from "../commons/publicKey";
import { acquireToken, createUser, getWallet, initUser } from "../commons/wallet";

const Wallet = () => {
  const [walletUserId, setWalletUserId] = useState("");
  const [wallet, setWallet] = useState({
    accountType: "",
    address: "",
    custodyType: "",
    blockchain: "",
    id: "",
    userId: "",
  });

  const createUserFun = async () => {
    const sdk = new W3SSdk();

    sdk.setAppSettings({
      appId: await getAppId(),
    });

    const mockUserId = crypto.randomUUID();
    localStorage.setItem("userId", mockUserId);
    await createUser(mockUserId);
    // will hit cros issue here
    const { userToken, encryptionKey } = await acquireToken(mockUserId);
    sdk.setAuthentication({
      userToken: userToken,
      encryptionKey: encryptionKey,
    });

    const challengeId = await initUser(mockUserId);
    sdk.execute(challengeId, (error, result) => {
      if (error) {
        console.log(`${error?.code?.toString() || "Unknown code"}: ${error?.message ?? "Error!"}`);
        return;
      }

      console.log(`Challenge: ${result?.type}`);
      console.log(`status: ${result?.status}`);
    });
  };

  const showWallet = async () => {
    const userId = localStorage.getItem("userId") as string;
    const curWallets = await getWallet(userId);
    setWallet(curWallets[0]);
  };

  return (
    <div>
      <h1>User Wallet</h1>
      <button onClick={createUserFun}>CREATE USER WALLET</button>
        <br />
        <button onClick={showWallet}>SHOW WALLET</button>
        <br />
        <p>AccountType: {wallet.accountType}</p>
        <p>Address: {wallet.address}</p>
        <p>custodyType: {wallet.custodyType}</p>
        <p>Blockchain: {wallet.blockchain}</p>
        <p>UserId: {wallet.userId}</p>
    </div>
  );
};

export default Wallet;
