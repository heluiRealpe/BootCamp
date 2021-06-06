const mongoose = require('mongoose');
const Photo = require('../models/photos');

mongoose.connect('mongodb://localhost:27017/codenotch', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

async function obtenerFotos(name) {
    let result = await Photo.find({name: name});
    return result;
}

module.exports = { obtenerFotos }