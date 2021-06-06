const mongoose = require('mongoose');
const User = require('./models/user');
const Profile = require('./models/profile');
const Creedentials = require('./models/creedentials');
const { checkRespuesta } = require('./helpers/checkrespuesta');

mongoose.connect('mongodb://localhost:27017/codenotch', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const newUser = new User({
    login: "helui",
    password: "constraseña123123R@r@"
});

const newProfile = new Profile({
    name: "Héctor",
    surname: "Realpe",
    dateOfBirth: new Date(1982,9,28),
    Comments: "usuario con muchas curiosidades",
    rol: 'Developer'
});

const newCredentials = new Creedentials({
    adress: "Calle Canarias 57",
    phone: "608230001",
    email: "hrealpe@gmail.com"
});

// newUser.save(checkRespuesta);
newProfile.save(checkRespuesta);
// newCredentials.save(checkRespuesta);
