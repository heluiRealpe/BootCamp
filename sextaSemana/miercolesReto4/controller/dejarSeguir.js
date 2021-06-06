const mongoose = require('mongoose');
const User = require('../models/user');

async function dejarSeguir(origen, destino) {
    let result = await User.updateOne({name: origen, follow: destino}, {follow: ""});
    return result;
}

module.exports = { dejarSeguir };