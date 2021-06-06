const mongoose = require('mongoose');
const Photo = require('../models/photos');

async function eliminarTodasFotos(name) {
    let result = await Photo.deleteMany({name: name});
    return result;
}

module.exports = { eliminarTodasFotos };