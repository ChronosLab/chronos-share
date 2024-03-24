import crypto from 'crypto';
import { circleApiKey } from './config';
import { getCipherText } from './publicKey';

export async function createWallet(count: number, walletSetId: string) {
    
  const url = 'https://api.circle.com/v1/w3s/developer/wallets';
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${circleApiKey}`},
    body: JSON.stringify({
      idempotencyKey: crypto.randomBytes(16).toString('hex'),
      entitySecretCipherText: await getCipherText(),
      blockchains: ["ETH-SEPOLIA"],
      count: count,
      walletSetId: walletSetId
    })
  };
  
  const result = await fetch(url, options)
    .then(response => response.json())
    .catch(err => console.error('error:' + err));

  return result.data.wallets
}