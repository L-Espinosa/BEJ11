const express = require("express")
const app = express()

// app.use(express.json())

const freteController = require("./controllers/frete")

app.use("/frete", freteController)

app.get("/", (request, response) => {
    response.json({ test: "OK" })
})


app.get('/leonardo', (req, res) => {
    res.send('about');
  });
  
// console.table(app)

module.exports = app