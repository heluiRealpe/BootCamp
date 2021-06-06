const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    nationality: String,
    age: Number
});

const AutorModel = mongoose.model('Autor', AutorSchema);

module.exports = AutorModel;