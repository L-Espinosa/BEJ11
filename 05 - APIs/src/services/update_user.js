const repository = require("../repositories/users")

const updateUser = async (id, input) => {
    const user = await repository.update(id, input)

    const { email, name } = user

    return { email, name, id }
}

module.exports = updateUser