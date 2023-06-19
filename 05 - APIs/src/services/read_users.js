const repository = require("../repositories/users")

const readUsers = async () => {
    const usersData = await repository.all()
    const users = []

    console.log(usersData)

    usersData.forEach((user) => {
        users.push({
            name: user.name,
            id: user._id,
        })
    })

    return users
}

module.exports = readUsers