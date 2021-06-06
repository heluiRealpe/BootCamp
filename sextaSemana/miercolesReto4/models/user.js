const mongoose = require('mongoose');
const { checkPass } = require('../helpers/checkPass');
const { calcularEdad } = require('../helpers/checkEdad');
const { checkEmail } = require('../helpers/checkEmail')

const UserSchema = new mongoose.Schema({
    login: String,
    password: { 
        type: String,
        validate: [
            function(password) {
                return checkPass(password);
            },
            'El password no cumple los mínimos de seguridad'
        ]
    },
    name: String,
    surname: String,
    dateOfBirth: Date,
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
    follow: String
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