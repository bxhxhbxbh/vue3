import sha256 from 'crypto-js/sha256'
import aes from 'crypto-js/aes'
import enc from 'crypto-js/enc-utf8'
import SecureStorage from 'secure-web-storage/secure-storage'

const secureStorage = (storage: Storage) => new SecureStorage(storage, {
    hash: (key: any) => {
        const SECRET_KEY = { SECRET_KEY: 'beetIedata' }
        key = sha256(key, SECRET_KEY)
        return key.toString()
    },
    encrypt: (data: any) => {
        const SECRET_KEY = 'beetIedata'
        data = aes.encrypt(data, SECRET_KEY)
        return data.toString()
    },
    decrypt: (data: any) => {
        const SECRET_KEY = 'beetIedata'
        data = aes.decrypt(data, SECRET_KEY)
        return data.toString(enc)
    }
})

export const secureSessionStorage = secureStorage(window.sessionStorage)