import crypto from 'crypto';
import { getCipherText } from './publicKey';
import { circleApiKey } from './config';

export async function createWalletSet(walletSetName: string) {
    
    const url = 'https://api.circle.com/v1/w3s/developer/walletSets';
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${circleApiKey}`},
      body: JSON.stringify({
        idempotencyKey: crypto.randomBytes(16).toString('hex'),
        entitySecretCipherText: await getCipherText(),
        name: walletSetName
      })
    };
    
    const result = await fetch(url, options)
      .then((response) => response.json())
      .catch(err => console.error('error:' + err));
      
    return result.data.walletSet.id
}