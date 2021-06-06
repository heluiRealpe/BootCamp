const mongoose = require('mongoose');
const { checkEmail } = require('../helpers/checkEmail')

const CreedentialsSchema = new mongoose.Schema({
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
    }
});



const CreedentialsModel = mongoose.model('Creedentials', CreedentialsSchema);

module.exports = CreedentialsModel;