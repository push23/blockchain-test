const crypto = require('crypto')

module.exports = (string) => crypto.createHash('sha256').update(JSON.stringify(string)).digest('hex')