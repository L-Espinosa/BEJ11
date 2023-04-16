const express = require("express")
const router = express.Router()

const { createItem, errors } = require("../services/create_item")

router.post("/", async (req,res) => {
    const input = req.body
    
    console.log(req.body)

    if (req.body === undefined ) {
        res.status(400)
        res.json({error: "invalidBody"})
    } else {
        try {
            createItem(input).then((result) => {
            res.json(result)
            }).catch((error) => {
                if (error === errors.skuMustBeUnique) {
                    res.status(406)
                    res.json({ error })
                } else if (error === errors.descriptionIsRequired || errors.skuIsRequired) {
                    res.status(400)
                    res.json({ error })
                } else {
                    res.status(406)
                    res.json({ error })
                }
            })
        } catch(error) {
            res.status(400)
            res.json({ error })
        }
    }
})

module.exports = router