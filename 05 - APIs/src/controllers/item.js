const express = require("express")
const router = express.Router()

const { createItem, errors } = require("../services/create_item")
const readItems = require("../services/read_items")
const { readItem, readErrors } = require("../services/read_item")
const updateItem = require("../services/update_item")
const {destroyitem, softDestroyitem} = require("../services/delete_item")

//Create
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

//Read
router.get("/", async(req,res) => {
    const result = await readItems()

    res.json(result)
})

router.get("/:sku", async(req,res) => {
    
    try {
        const result = await readItem(req.params.sku)

        if (result){.00+
            res.json(result)
        } else {
            res.status(404)
            res.json({error: "notFound"})
        }

    } catch(error) {
        res.status(400)
        res.json({error})
    }
    
})


//Update
router.put("/:sku",async (req,res) => {
    
    try {
        const result = updateItem(req.params.sku, req.body)

        res.json(result)
        
    } catch(error) {
        res.status(400)
        res.json({error})
    }
    
})

//Delete
router.delete("/:sku", async (req,res) => {
    try {
        const result = softDestroyitem(req.params.sku)

        res.json(result)
        
    } catch(error) {

        res.statusCode(400)
        res.json({error})
    }
})
module.exports = router