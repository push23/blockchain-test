const _ = require('lodash')

const tempStorageData = []

module.exports = {
    addItem: (entry) => tempStorageData.push(entry),
    getLength: () => tempStorageData.length,
    clear: () => tempStorageData.length = 0,
    getAllItems: () => _.clone(tempStorageData)
}