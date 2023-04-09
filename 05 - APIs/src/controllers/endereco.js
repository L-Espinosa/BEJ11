const express = require("express")
const router = express.Router()

const calculaFrete = require("../services/calculaFrete")
const viaCEP = require("../services/viaCEP")

router.get('/', (req, res) => {
    console.log(req)
    res.json('Endereco');
})

router.get('/:cep/', async (req,res) => {
    const cepDestino = req.params.cep

    const result = await viaCEP.consultaEndereco(cepDestino)

    res.send(result)

})


module.exports = router