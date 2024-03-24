import forge from 'node-forge';
import { circleApiKey, entityKey } from './config';

export async function getCipherText() {

    const url = 'https://api.circle.com/v1/w3s/config/entity/publicKey';
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${circleApiKey}` }
    };

    const result = await fetch(url, options)
        .then((response) => response.json())
        .catch((error) => console.error('error', error))

    const entitySecret = forge.util.hexToBytes(entityKey)
    const publicKey = forge.pki.publicKeyFromPem(result.data.publicKey)
    const encryptedData = publicKey.encrypt(entitySecret, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
        mgf1: {
            md: forge.md.sha256.create(),
        },
    })

    return forge.util.encode64(encryptedData)
}