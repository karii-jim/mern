const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
    nombre: String,
    apPaterno: String,
    apMaterno: String,
    nBoleta: Number
})

module.exports = mongoose.model(
    'usuario', UsuarioSchema)