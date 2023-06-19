const app = require("./app")
const port = process.env.APP_PORT

const { mongoose, databaseUrl } = require("./mongo")

mongoose.connect(databaseUrl)
    .then(() => {
        console.log(`Connected to ${databaseUrl}`)
        
        app.listen(port, () => {
            console.log(`Server running on localhost:${port}`)
        })
    })