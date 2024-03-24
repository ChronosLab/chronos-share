import forge from 'node-forge';
import { circleApiKey } from './config';

export async function createTransaction(walletId: string) {
    
    const url = `https://api.circle.com/v1/w3s/wallets/${walletId}/balances`;
    const options = {
      method: 'GET',
      headers: {'Content-Type': 'application/json', Authorization: `Bearer ${circleApiKey}`}
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
}