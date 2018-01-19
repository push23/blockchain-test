const _ = require('lodash')

const blockStorageData = {}

const getLastItems = (amount) => _.sortBy(blockStorageData, (block) => block.timestamp).slice(-amount)

module.exports = {
    addItem: (blockData) => blockStorageData[blockData.block_hash] = blockData,
    getLastItems: getLastItems,
    getLastItemHash: () => _.get(getLastItems(1)[0], 'block_hash', 0),
    clear: () => blockStorageData.length = 0
}