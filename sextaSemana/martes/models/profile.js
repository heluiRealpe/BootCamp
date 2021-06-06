const mongoose = require('mongoose');
const { calcularEdad } = require('../helpers/checkEdad');

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    Comments: String,
    rol: {
        type: String,
        enum: ['Admin', 'Developer', 'Lead', 'Consultor']
    }
});

// MIDDLEWARE:

ProfileSchema.pre('save', next => {
    let edad = calcularEdad(this.dateOfBirth);
    if(edad >= 18 && edad <= 65) {
        return true;
    }
    'Este usuario no tiene la edad correcta'
    next()
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);

module.exports = ProfileModel;




