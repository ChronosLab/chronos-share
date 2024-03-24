import React from "react";
import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";
import { getAppId } from "../commons/publicKey";
import { acquireToken, createUser, initUser } from "../commons/wallet";

const Wallet = () => {
  const chanllenge = async () => {
    const sdk = new W3SSdk();

    sdk.setAppSettings({
      appId: await getAppId(),
    });

    const mockUserId = crypto.randomUUID()
    await createUser(mockUserId);
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

  return (
    <div>
      <h1>Wallet Component</h1>
      <button onClick={chanllenge}>Challenge Pin</button>
    </div>
  );
};

export default Wallet;
