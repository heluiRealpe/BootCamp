const mongoose = require('mongoose');
const { checkRespuesta } = require('../helpers/checkrespuesta');
const Photo = require('../models/photos');

function obtenerFotos(name) {
    Photo.find({name: name}, checkRespuesta);
}

module.exports = { obtenerFotos };