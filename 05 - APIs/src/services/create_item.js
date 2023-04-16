const repository = require("../repositories/items")
const errors = {
    skuIsRequired: "skuIsRequired",
    skuMustBeUnique: "skuMustBeUnique",
    descriptionIsRequired: "descriptionIsRequired"
}

const createItem = async (input) => {

    //Guard clauses
    if (input.sku === undefined || input.sku === "") {
        throw errors.skuIsRequired
    }

    if (input.description === undefined || input.description === "") {
        throw errors.descriptionIsRequired
    }

    //Valores padroes
    if (input.price === undefined || input.price === "") {
        input.price = 0
    }

    if (input.stock === undefined || input.stock === "") {
        input.stock = 0
    }

    const skuExists = await repository.countBySku(input.sku)

    if (skuExists > 0) {
        throw errors.skuMustBeUnique
    } else {
        return repository.create(input)
    }
}

module.exports = { createItem, errors }