const _ = require('lodash')

const tempStorageData = []

module.exports = {
    addItem: (itemData) => tempStorageData.push(itemData),
    getLength: () => tempStorageData.length,
    clear: () => tempStorageData.length = 0,
    getAllItems: () => _.clone(tempStorageData)
}