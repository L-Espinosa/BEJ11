const express = require("express")
const app = express()

app.use(express.json())

const freteController = require("./controllers/frete")
const enderecoController = require("./controllers/endereco")
const itemController = require("./controllers/item")

app.use("/frete", freteController)
app.use("/endereco", enderecoController)
app.use("/item", itemController)

app.get("/", (request, response) => {
    response.json({ test: "OK" })
})


app.get('/leonardo', (req, res) => {
    res.send('about');
  });
  
// console.table(app)

module.exports = app