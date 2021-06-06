const mongoose = require('mongoose');
const User = require('./models/user');
const Photo = require('./models/photos');
const { checkRespuesta } = require('./helpers/checkrespuesta');
const { subidaFoto } = require('./controller/subidaFotos');
const { obtenerFotos } = require('./controller/obtenerFotos');
const { seguir } = require('./controller/seguir');
const { dejarSeguir } = require('./controller/dejarSeguir');
const { eliminarFoto } = require('./controller/eliminarFoto');
const { eliminarTodasFotos } = require('./controller/eliminarTodasFotos');


mongoose.connect('mongodb://localhost:27017/codenotch', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const newUser = new User({
    login: "helui",
    password: "constraseña123123R@r@",
    name: "Héctor",
    surname: "Realpe",
    dateOfBirth: new Date(1982,9,28),
    Comments: "usuario con muchas curiosidades",
    rol: 'Developer',
    adress: "Calle Canarias 57",
    phone: "608230001",
    email: "hrealpe@gmail.com",
    follow: "Raquel"
});
newUser.save(checkRespuesta);

// const newPhoto = new Photo({
//     name: "foto2",
//     url: "https://th.bing.com/th/id/OIP.zk2XYErGNitU2e-RbBPSOAHaFy?w=204&h=180&c=7&o=5&dpr=2&pid=1.7",
//     title: "fotoBonita2",
//     description: "probandoProbando2"
// });
// newPhoto.save(checkRespuesta);

// subidaFoto("foto6", "https://th.bing.com/th/id/OIP.zk2XYErGNitU2e-RbBPSOAHaFy?w=204&h=180&c=7&o=5&dpr=2&pid=1.7", "fotoBonita2", "probandoProbando2");
// obtenerFotos();



// seguir("Héctor", "Belén");
// dejarSeguir("Héctor", "Lucia");
// dejarSeguir("Héctor", "Belén");

// eliminarFoto("foto1", "fotoBonita2");
// eliminarTodasFotos("foto3");


// newUser.save(checkRespuesta);
// newPhoto.save(checkRespuesta);


