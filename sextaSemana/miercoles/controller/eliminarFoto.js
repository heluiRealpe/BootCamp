const mongoose = require('mongoose');
const { checkRespuesta } = require('../helpers/checkrespuesta');
const Photo = require('../models/photos');

function eliminarFoto(name, title) {
    Photo.deleteOne({name: name, title: title}, checkRespuesta);
}

module.exports = { eliminarFoto };