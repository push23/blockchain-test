const _ = require('lodash')

const generateHash = require('../utils/generateHash')

module.exports = (req, res) => {
    req.tempStorage.addItem(req.body.data)
    
    if (req.tempStorage.getLength() >= 5) {
        let newBlockEntry = {
            previous_block_hash: req.blockStorage.getLastItemHash(),
            rows: req.tempStorage.getAllItems(),
            timestamp: (new Date).getTime()
        }
        
        newBlockEntry.block_hash = generateHash(newBlockEntry)
        req.tempStorage.clear()
        req.blockStorage.addItem(newBlockEntry)
    }
    
    res.json(req.body)
}