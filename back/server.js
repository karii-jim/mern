const express = require ('express')

const app = express()

const cors = require ('cors')

const bodyParser = require('body-parser')

require('./src/db/database')

const usuarioRouter = require('./src/routes/router')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

app.use(bodyParser.json())

app.use('/', usuarioRouter) 

app.get('/', (req, res )=>{
    res.send('Hola mundo')
})



app.listen(4000, function(){
    console.log("servidor activo")
})