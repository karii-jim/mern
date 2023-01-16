const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PartidoSchema = new Schema({
    partido: String,
    candidato: String,
    puesto: String,
    domicilio: String,
    telefono: Number
})

module.exports = mongoose.model(
    'partido', PartidoSchema)