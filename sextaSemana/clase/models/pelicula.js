const mongoose = require('mongoose')

const PeliculaSchema = new mongoose.Schema({

    titulo: String,
    genero: String,
    duracion: Number
})

const PeliculaModel = mongoose.model('Pelicula', PeliculaSchema)

module.exports = PeliculaModel