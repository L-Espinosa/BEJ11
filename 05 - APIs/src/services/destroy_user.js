const repository = require("../repositories/users")

const destroyUser = async (id) => {
    const result = await repository.destroy(id)

    return result
}

const softDestroyUser = async (id) => {
    const now = new Date()
    const input = { deletedAt: now }

    await repository.update(id, input)

    return { id }
}

module.exports = { destroyUser, softDestroyUser }