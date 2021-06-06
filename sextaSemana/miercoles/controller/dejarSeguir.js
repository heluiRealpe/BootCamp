const mongoose = require('mongoose');
const { checkRespuesta } = require('../helpers/checkrespuesta');
const User = require('../models/user');

function dejarSeguir(origen, destino) {
    User.updateOne({name: origen, follow: destino}, {follow: ""}, checkRespuesta);
}

module.exports = { dejarSeguir };