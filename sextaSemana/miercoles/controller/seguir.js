const mongoose = require('mongoose');
const { checkRespuesta } = require('../helpers/checkrespuesta');
const User = require('../models/user');

function seguir(name, name2) {
    User.updateOne({name: name}, {follow: name2}, checkRespuesta);
}

module.exports = { seguir };