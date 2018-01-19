const express = require('express')
const bodyParser = require('body-parser')

const addDataRoute = require('./src/routes/addData.js')
const lastBlockRoute = require('./src/routes/lastBlock.js')

const tempStorageService = require('./src/services/tempStorage.js')
const blockStorageService = require('./src/services/blockStorage.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function (req, res, next) {
    req.tempStorage = tempStorageService
    req.blockStorage = blockStorageService
    next();
});

app.post('/add_data', addDataRoute)
app.get('/last_blocks/:amount', lastBlockRoute)

app.listen(3000, () => console.log('App listening on port 3000!'))