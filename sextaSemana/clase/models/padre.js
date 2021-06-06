const mongoose = require('mongoose')

const PadreSchema = new mongoose.Schema({

    nombre: String,
    apellidos: String,
    edad: Number,
    hijos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hijo"
    }]
})

const PadreModel = mongoose.model('Padre', PadreSchema)

module.exports = PadreModel