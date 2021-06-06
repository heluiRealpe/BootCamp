const mongoose = require('mongoose');

const AutorPublicacionesSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    nationality: String,
    age: Number,
    publicaciones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Libros'
    }]
});

const AutorPublicacionesModel = mongoose.model('AutorPublic', AutorPublicacionesSchema);

module.exports = AutorPublicacionesModel;