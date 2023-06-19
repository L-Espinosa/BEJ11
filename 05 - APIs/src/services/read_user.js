const repository = require("../repositories/users")

const readUser = async (id) => {
    const userData = await repository.find(id)

    if (userData) {
        const { name, email } = userData
    
        return { name, email, id }
    }

    return false
}

module.exports = readUser