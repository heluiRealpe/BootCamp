const mongoose = require('mongoose')

const AutorSchema = new mongoose.Schema({

    nombre: String,
    apellidos: String,
    edad: Number,
})

const AutorModel = mongoose.model('Autor', AutorSchema)

module.exports = AutorModel