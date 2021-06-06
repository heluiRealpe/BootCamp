const mongoose = require('mongoose');

const LibrosSchema = new mongoose.Schema({
    title: String,
    autores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AutorPublic'
    }],
    editorial: String,
    anyo: Number,
    langauge: String,
    nPaginas: Number
});

const LibrosModel = mongoose.model('Libros', LibrosSchema);

module.exports = LibrosModel;