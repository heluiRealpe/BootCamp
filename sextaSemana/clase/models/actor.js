const mongoose = require('mongoose')

const ActorSchema = new mongoose.Schema({

    nombre: String,
    edad: Number,
    nacionalidad: String,
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pelicula'
    }
})

const ActorModel = mongoose.model('Actor', ActorSchema)

module.exports = ActorModel