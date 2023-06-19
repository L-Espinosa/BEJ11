const express = require("express")

const router = express.Router()

const authentication = require("../middlewares/authentication")

const { createUser, errors } = require("../services/create_user")
const readUsers = require("../services/read_users")
const readUser = require("../services/read_user")
const updateUser = require("../services/update_user")
const { softDestroyUser } = require("../services/destroy_user")
const generatePassword = require("../services/generate_password")

router.post("/", (request, response) => {
    const input = request.body
    const { name, email, password, passwordConfirmation } = input

    // try {
    //     const result = await createUser(name, email)

    //     response.json(result)
    // } catch (error) {
    //     response.status(406)
    //     response.json({ message: "invalid email", trace: error })
    // }

    try {
        const cryptedPassword = generatePassword(password, passwordConfirmation)

        createUser(name, email, cryptedPassword).then((result) => {
            response.json(result)
        }).catch((error) => {
            if (error === errors.EmailMustBeUnique) {
                response.status(406)
                response.json({ error })
            } else if (error === errors.NameIsRequired) {
                response.status(400)
                response.json({ error })
            } else if (error === errors.EmailFormatIsInvalid) {
                response.status(400)
                response.json({ error })
            } else {
                response.status(406)
                response.json({ error })
            }
        })
    } catch(error) {
        response.status(400)
        response.json({ error })
    }

    
})

const endpoint = async (request, response) => {
    const result = await readUsers()

    response.json(result)
}

router.get("/", authentication, endpoint)

router.get("/:id", async (request, response) => {
    const result = await readUser(request.params.id)

    if (result) {
        response.json(result)
    } else {
        response.status(404)
        response.json({ error: "not found" })
    }
})

router.put("/:id", async (request, response) => {
    const { email, name } = request.body

    result = await updateUser(request.params.id, { email, name })

    response.json(result)
})

router.delete("/:id", async (request, response) => {
    const { id } = request.params

    try {
        const result = await softDestroyUser(id)
        response.json(result)
    } catch (err) {
        response.json(err)
    }
})

module.exports = router