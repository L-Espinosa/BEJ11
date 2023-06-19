const database = require("../database")
const { mongoose } = require("../mongo")

const cuid = require("@paralleldrive/cuid2")

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    cryptedPassword: String,
    deletedAt: Date,
})

const model = mongoose.model('usuarios', userSchema)

const create = async (input) => {
    const user = new model(input)
    
    const result = await user.save()

    const id = result._id
    const { name, email } = input
    return { name, email, id }
}

const all = async () => {
    const users = await model.find({ deletedAt: null })

    return users
}

const find = async (id) => {
    const user = await model.findOne({ _id: id, deletedAt: null })

    return user
}

const findByEmail = async (email) => {
    const user = await model.findOne({ email, deletedAt: null })

    return user
}

const countByEmail = async(email) => {
    const user = await model.count({ email, deletedAt: null })

    return user
}

const update = async (id, input) => {
    console.log(input)
    const user = await model.updateOne({ _id: id, deletedAt: null }, { $set: input })
    
    return { ...user, id }
}

const destroy = async (id) => {
    const result = await model.deleteOne({ _id: id })

    console.log(result)

    return { id }
}

module.exports = { create, all, find, findByEmail, countByEmail, update, destroy }