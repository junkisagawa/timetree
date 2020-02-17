const express = require('express')
const bodyParser = require('body-parser')
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require('cors')
const fetch = require('node-fetch')
const qs = require('querystring')
// const log4js = require('log4js');j
// const logger = log4js.getLogger();
const api = require('./routes/api');
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'));
app.use('/api', api)

module.exports = app;
const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
app.listen(port, () => console.log(`Server running on port: ${port}`));
