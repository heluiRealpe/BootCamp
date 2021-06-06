const mongoose = require('mongoose');
const Photo = require('../models/photos');

async function eliminarFoto(name, title) {
    let result = await Photo.deleteOne({name: name, title: title});
    return result;
}

module.exports = { eliminarFoto };