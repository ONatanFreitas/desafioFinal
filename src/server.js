const express = require('express')
const app = express()
const database = require('./database/database')
const bodyParser = require('body-parser')
var axios = require('axios')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', async (req, res) => {
            
    res.send(await database.titulosFilmes())

})



app.listen(5005)