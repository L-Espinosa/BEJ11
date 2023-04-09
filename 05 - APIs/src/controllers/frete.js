const express = require("express")
const router = express.Router()

const calculaFrete = require("../services/calculaFrete")

router.get('/', (req, res) => {
    console.log(req)
    res.json('about');
})


router.get('/:state/:city', (req, res) => {
    const value = calculaFrete(req.params.city,req.params.state)

    if (value === undefined) {
        res.statusCode = 400
        res.json({error: "invalidState"})
    } else {
        const result = {
                    state: req.params.state,
                    city: req.params.city,
                    value
                    }
        
        res.json(result)
    }
})


module.exports = router