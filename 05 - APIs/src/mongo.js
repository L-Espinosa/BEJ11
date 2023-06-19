const mongoose = require("mongoose")
const databaseUrl = process.env.MONGO_URL //"mongodb://localhost:27017/exercicios"

module.exports = { mongoose, databaseUrl }