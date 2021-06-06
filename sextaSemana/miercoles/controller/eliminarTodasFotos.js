const mongoose = require('mongoose');
const { checkRespuesta } = require('../helpers/checkrespuesta');
const Photo = require('../models/photos');

function eliminarTodasFotos(name) {
    Photo.deleteMany({name: name}, checkRespuesta);
}

module.exports = { eliminarTodasFotos };