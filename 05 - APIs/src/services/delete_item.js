const repository = require("../repositories/items")

const destroyitem = async (sku) => {
    const result = await repository.destroy(sku)

    return result
}

const softDestroyitem = async (sku) => {
    const now = new Date()
    const input = { deletedAt: now }

    await repository.update(sku, input)

    return { sku }
}

module.exports = { destroyitem, softDestroyitem }