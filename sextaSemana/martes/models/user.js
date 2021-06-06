const mongoose = require('mongoose');
const { checkPass } = require('../helpers/checkPass');

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
    }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;