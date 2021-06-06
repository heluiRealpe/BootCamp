const mongoose = require('mongoose');
const { calcularEdad } = require('../helpers/checkEdad');
const { checkEmail } = require('../helpers/checkEmail')

const UserSchema = new mongoose.Schema({
    login: String,
    password: String,
    name: String,
    surname: String,
    age: Number,
    Comments: String,
    rol: {
        type: String,
        enum: ['Admin', 'Developer', 'Lead', 'Consultor']
    },
    adress: String,
    phone: String,
    email: {
        type: String,
        validate: [
            function(email) {
                return checkEmail(email);
            },
            'El email no es correcto.'
        ]
    },
    follows: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    photos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photos'
    }
});

UserSchema.pre('save', next => {
    let edad = calcularEdad(this.dateOfBirth);
    if(edad >= 18 && edad <= 65) {
        return true;
    }
    'Este usuario no tiene la edad correcta'
    next()
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;