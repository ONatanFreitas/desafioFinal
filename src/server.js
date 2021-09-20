require('dotenv').config()
const express = require('express')
const app = express()
const database = require('./database/database')
const bodyParser = require('body-parser')
var axios = require('axios')
const cors = require('cors')



app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

// envia os dados dos filmes para fetch
app.get('/filmes', async (req, res) => {
            
    res.send(await database.mostrarDadosFilmes())

})


app.listen(5005)
app.use(express.static('desafiofinal'))