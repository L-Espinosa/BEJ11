const { createHmac } = require("node:crypto");

const cryptoHmac = (password) => {
    return createHmac(process.env.HASH_FUNCTION, process.env.HASH_SECRET)
        .update(password)
        .digest("hex")
}

const noCrypto = (password) => {
    return password
}

const generatePassword = (password, passwordConfirmation) => {
    if(password === undefined || password === "" || passwordConfirmation === undefined || passwordConfirmation === "")
        throw "InvalidPassword"

    if(password !== passwordConfirmation)
        throw "PasswordMismatch"

    if(process.env.CRYPTO_STRATEGY === "hmac")
        return cryptoHmac(password)
    else
        return noCrypto(password)
}

module.exports = generatePassword