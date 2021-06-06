const mongoose = require('mongoose');
const Photo = require('../models/photos');

async function subidaFoto(name, url, title, description) {
    let result = await Photo.create({name: name, url: url, title: title, description: description});
    return result;
}

module.exports = { subidaFoto };