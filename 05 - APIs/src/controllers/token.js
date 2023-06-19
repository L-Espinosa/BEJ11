const express = require("express")
const jwt = require("jsonwebtoken");

const router = express.Router()

const convertDate = require("../services/convert_date_timezone")

const authenticate = require("../services/autheticate")

router.post("/", async (request, response) => {
    const input = request.body
    const { email, password } = input

    const authd = await authenticate(email, password)
    
    if (authd) {
        const timeToExpire =  (60 * 60) // 3600 seconds
        const expiresAt = Math.floor(Date.now() / 1000) + timeToExpire

        const token = jwt.sign({ id: authd._id, exp: expiresAt }, process.env.HASH_SECRET)

        const city = 'America/Sao_Paulo'

        const expiredAtDate = new Date(0)
        expiredAtDate.setUTCSeconds(expiresAt)

        const expiresReturn = convertDate(expiredAtDate)

        response.json({ token, expiresAt: expiresReturn  })

    } else {
        response.status(401)
        response.json({ error: "NotAuthorized" })
    }
})

module.exports = router