const mongoose = require('mongoose')

const HijoSchema = new mongoose.Schema({

    nombre: String,
    apellidos: String,
    edad: Number
})

const HijoModel = mongoose.model('Hijo', HijoSchema)

module.exports = HijoModel