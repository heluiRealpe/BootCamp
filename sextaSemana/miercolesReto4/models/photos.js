const mongoose = require('mongoose');

const PhotosSchema = new mongoose.Schema({
    name: String,
    url: String,
    title: String,
    description: String,
});

const PhotosModel = mongoose.model('Photos', PhotosSchema);

module.exports = PhotosModel;
