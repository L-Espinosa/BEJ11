const repository = require("../repositories/users")
const errors = {
    EmailMustBeUnique: "EmailMustBeUnique",
    NameIsRequired: "NameIsRequired",
    EmailIsRequired: "EmailIsRequired",
    EmailFormatIsInvalid: "EmailFormatIsInvalid",
    PasswordIsRequired: "PasswordIsRequired",
}


const createUser = async (name, email, cryptedPassword) => {
    const input = { name, email, cryptedPassword }

    if (name === undefined || name === "")
        throw errors.NameIsRequired

    if (email === undefined || email === "")
        throw errors.EmailIsRequired

    if (!email.match(/^[a-z0-9\+]+@[a-z_]+?(\.[a-z]{2,3})+$/i))
        throw errors.EmailFormatIsInvalid

    if (cryptedPassword === undefined || cryptedPassword === "") {
        throw errors.PasswordIsRequired
    }

    const emailExists = await repository.countByEmail(email)

    if (emailExists > 0)
        throw errors.EmailMustBeUnique

    return repository.create(input)
}

module.exports = { createUser, errors }