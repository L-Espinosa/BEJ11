const repository = require("../repositories/users")
const generatePassword = require("../services/generate_password")

const authenticate = async (email, password) => {
    const user = await repository.findByEmail(email)

    if(!user) {
        return false
    }

    const cryptedPassword = generatePassword(password, password)

    if(user.cryptedPassword !== cryptedPassword) {
        return false
    }

    return user
}

module.exports = authenticate