const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({

    title: String,
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Autor'
    },
    editorial: String,
    anyo: Number,
    langauge: String,
    nPaginas: Number
});

const LibroModel = mongoose.model('Libro', LibroSchema);

module.exports = LibroModel;