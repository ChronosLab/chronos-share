import crypto from "crypto";
import { circleApiKey } from "./config";
import { getCipherText } from "./publicKey";

export async function createWallet(count: number, walletSetId: string) {
  const url = "https://api.circle.com/v1/w3s/developer/wallets";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${circleApiKey}` },
    body: JSON.stringify({
      idempotencyKey: crypto.randomBytes(16).toString("hex"),
      entitySecretCipherText: await getCipherText(),
      blockchains: ["ETH-SEPOLIA"],
      count: count,
      walletSetId: walletSetId,
    }),
  };

  const result = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error("error:" + err));

  return result.data.wallets;
}

export async function createUser(userId: string) {
  const url = "https://api.circle.com/v1/w3s/users";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${circleApiKey}` },
    body: JSON.stringify({ userId: userId }),
  };

  await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error("error:" + err));
}

export async function acquireToken(userId: string) {
  const url = "https://api.circle.com/v1/w3s/users/token";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${circleApiKey}` },
    body: JSON.stringify({ userId: userId }),
  };

  const result = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error("error:" + err));

  console.log(result)
  return result.data
}

export async function initUser(userId: string) {
  const url = "https://api.circle.com/v1/w3s/user/initialize";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${circleApiKey}`,
      "X-User-Token": await acquireToken(userId).then((res) => res.userToken),
    },
    body: JSON.stringify({ idempotencyKey: crypto.randomBytes(16).toString("hex"), blockchains: ["ETH-SEPOLIA"] }),
  };

  const result = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error("error:" + err));

  return result.data.challengeId;
}

export async function createChallenge(userId: string) {
  const url = "https://api.circle.com/v1/w3s/user/pin";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${circleApiKey}`,
      "X-User-Token": await acquireToken(userId).then((res) => res.userToken),
    },
    body: JSON.stringify({ idempotencyKey: crypto.randomBytes(16).toString("hex"), blockchains: ["ETH-SEPOLIA"] }),
  };

  const result = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error("error:" + err));

  console.log(result);

  return result;
}

export async function getWallet(userId: string) {

  console.log(userId)
  const url = `https://api.circle.com/v1/w3s/wallets?userId=${userId}&blockchain=ETH-SEPOLIA`;
  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${circleApiKey}`}
  };
  
  const result = await fetch(url, options)
    .then(response => response.json())
    .catch(err => console.error('error:' + err));
  
  console.log(result)

  return result.data.wallets
}