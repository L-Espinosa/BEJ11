const repository = require("../repositories/items")
const errors = {
    skuIsRequired: "skuIsRequired",
    invalidData: "invalidData",
    cannotUpdateSku: "cannotUpdateSku"
}
const updateItem = async (sku, input) => {

    if (sku === undefined || sku === "") {
        throw errors.skuIsRequired
    }

    if (input === undefined || input === "") {
        throw errors.invalidData
    }

    const result = await repository.update(sku, input)
    console.log(result)

    return result
   
}

module.exports = updateItem