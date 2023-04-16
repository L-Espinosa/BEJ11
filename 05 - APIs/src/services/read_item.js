const repository = require("../repositories/items")
const errors = {
    skuIsRequired: "skuIsRequired"
}

const readItem = async (sku) => {
    const result = await repository.findBySku(sku)

    if (sku === undefined || sku === "") {
        throw errors.skuIsRequired
    }

    if (result) {
        const ret = {
            sku: result.sku, 
            description: result.description,
            price: result.price,
            stock: result.stock
        }

        return ret
    }

    return false
}

module.exports = { readItem, errors }