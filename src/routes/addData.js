const _ = require('lodash')

const generateHash = require('../utils/generateHash')

module.exports = (req, res) => {
    req.tempStorage.addItem(req.body.data)
    
    if (req.tempStorage.getLength() >= 5) {
        let newBlockItem = {
            previous_block_hash: req.blockStorage.getLastItemHash(),
            rows: req.tempStorage.getAllItems(),
            timestamp: (new Date).getTime()
        }
        
        newBlockItem.block_hash = generateHash(newBlockItem)
        req.tempStorage.clear()
        req.blockStorage.addItem(newBlockItem)
    }
    
    res.json(req.body)
}