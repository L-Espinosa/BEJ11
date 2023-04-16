const repository = require("../repositories/items")

const readitems = async () => {
    const itemsData = await repository.all()
    const items = []

    itemsData.forEach((item) => {
        items.push({
            sku: item.sku,
            description: item.description,
            price: item.price,
            stock: item.stock,
            id: item._id,
        })
    })

    return items
}

module.exports = readitems