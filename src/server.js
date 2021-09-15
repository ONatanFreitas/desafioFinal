const express = require('express')
const app = express()
const database = require('./database/database')
const bodyParser = require('body-parser')
var axios = require('axios')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/filmes', async (req, res) => {
            
    res.send(await database.mostrarDadosFilmes())

})

app.get('/dados-lista', async (req, res) => {
            
    res.send(await database.dadosListaFilmes())

})


app.listen(3003)