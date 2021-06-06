const mongoose = require('mongoose');
const User = require('../models/user');

async function seguir(name, name2) {
    let result = await User.updateOne({name: name}, {follow: name2});
    return result;
}

module.exports = { seguir };