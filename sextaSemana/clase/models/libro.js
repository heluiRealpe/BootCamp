const mongoose = require('mongoose')

const LibroSchema = new mongoose.Schema({

    titulo: String,
    genero: String,
    nPaginas: Number,
    autores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Autor"
    }]
})

const LibroModel = mongoose.model('Libro', LibroSchema)

module.exports = LibroModel