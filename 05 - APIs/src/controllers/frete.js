const express = require("express")
const router = express.Router()

const calculaFrete = require("../services/calculaFrete")
const viaCEP = require("../services/viaCEP")

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

router.get('/:cep/', async (req,res) => {
    const cepDestino = req.params.cep

    const result = await viaCEP.consultaCEP(cepDestino)
    
    res.send(result)

})


module.exports = router