const _ = require('lodash')

const blockStorageData = {}

const getLastItems = (amount) => _.sortBy(blockStorageData, (block) => block.timestamp).slice(-amount)

module.exports = {
    addItem: (blockEntry) => blockStorageData[blockEntry.block_hash] = blockEntry,
    getLastItems: getLastItems,
    getLastItemHash: () => _.get(getLastItems(1)[0], 'block_hash', 0),
    clear: () => blockStorageData.length = 0
}