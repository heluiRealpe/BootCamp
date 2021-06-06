const mongoose = require('mongoose');
const { checkRespuesta } = require('../helpers/checkrespuesta');
const Photo = require('../models/photos');

function subidaFoto(name, url, title, description) {
    Photo.create({name: name, url: url, title: title, description: description}, checkRespuesta);
}

module.exports = { subidaFoto };