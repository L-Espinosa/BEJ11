const database = require("../database")
const { mongoose } = require("../mongo")

const itemSchema = new mongoose.Schema({
    description: String,
    sku: { type: String, unique: true},
    price: Number,
    stock: Number,
    deletedAt: Date
})

const model = mongoose.model('items', itemSchema)

const create = async (input) => {
    const item = new model(input)
    
    const result = await item.save()

    const id = result._id
    const { description, sku } = input

    return { description, sku, id }

}

const update = async (id, input) => {
    console.log(input)
    const item = await model.updateOne({ _id: id, deletedAt: null }, { $set: input })
    
    return { ...item, id }
}

const all = async () => {
    return await model.find({ deletedAt: null })
}

const find = async (id) => {
    return await model.findOne({ _id: id, deletedAt: null })
}

const findBySku = async (sku) => {
    return await model.findOne({ sku, deletedAt: null })
}

const countBySku = async(sku) => {
    return await model.count({ sku, deletedAt: null })
}

const destroy = async (id) => {
    const result = await model.deleteOne({ _id: id })
    
    //Para conferir
    console.log(result)

    return { id }
}

module.exports = { create, all, find, findBySku, countBySku, update, destroy }