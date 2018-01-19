const _ = require('lodash')

module.exports = (req, res) => {
    const amount = _.get(req.params, 'amount')
    
    res.json(req.blockStorage.getLastItems(amount))
}