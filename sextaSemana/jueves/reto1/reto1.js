const mongoose = require('mongoose');
const Libro = require('./models/libro');
const Libros = require('./models/libros');
const Autor = require('./models/autor');
const AutorPublic = require('./models/autorPublicaciones');

mongoose.connect('mongodb://localhost:27017/juevesRetos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

/**********  UNO A UNO  *********************/

// Autor.create({
//     name: "nombreAutor5",
//     lastname: "apellidoAutor5",
//     nationality: "colombiana",
//     age: 38
// })
// .then((autor) => {
//     console.log(autor);
//     return Libro.create({
//         title: "libro1",
//         autor: autor._id,
//         editorial: "editorial1",
//         anyo: 2019,
//         language: "español",
//         nPagians: 410
//     });
// })
// .then((libro) => {
//     console.log(libro);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// });

// Autor.find()
// .then((autores) => {
//     console.log(autores);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// });

// Libro.find()
// .then((libro) => {
//     console.log(libro);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// });

// Libro.findById("609d2df1e557f138f8066e00").populate("autor").exec()
// .then((libro) => {
//     console.log(libro);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// })


/**********  UNO A MUCHOS  *********************/

// MISMO CASO ANTERIOR, LOS LIBROS SON COMPENDIOS DE INVESTIGACIÓN (POSEEN VARIOS AUTORES)

// let autores = [];
// Autor.create({
//     name: "nombreAutor1",
//     lastname: "apellidoAutor1",
//     nationality: "española",
//     age: 63
// })
// .then((autor1) => {
//     console.log(`${autor1.name} creado`);
//     autores.push(autor1._id);
//     return Autor.create({
//         name: "nombreAutor2",
//         lastname: "apellidoAutor2",
//         nationality: "colombiana",
//         age: 54
//     })
// })
// .then((autor2) => {
//     console.log(`${autor2.name} creado`);
//     autores.push(autor2._id);
//     return Autor.create({
//         name: "nombreAutor3",
//         lastname: "apellidoAutor3",
//         nationality: "venezolana",
//         age: 43
//     })
// })
// .then((autor3) => {
//     console.log(`${autor3.name} creado`);
//     autores.push(autor3._id);
//     return Libros.create({
//         title: "libroINVESTIGACIÓN",
//         autores: autores,
//         editorial: "editoriaUNIVERSITARIA",
//         anyo: 2016,
//         language: "espanñol",
//         nPagians: 430
//     });
// })
// .then((libros) => {
//     console.log(`El ${libros.title} ha sido creado`);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// });

// Libros.find()
// .then((libros) => {
//     console.log(libros);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// });

// Libros.findById("609d3b191b1c1e2548985a55").populate("autores").exec()
// .then((libros) => {
//     console.log(libros);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// })


/**********  MUCHOS A MUCHOS  *********************/

// PARECIDO A LOS CASOS ANTERIORES: CADA AUTOR HA PARTICIPADO EN VARIOS LIBROS DE INVESTIGACIÓN

// let autores = [];

// AutorPublic.create({
//     name: "AutorPublic1",
//     lastname: "apellidoAutorPublic1",
//     nationality: "española",
//     age: 63
// })
// .then((AutorPublic1) => {
//     console.log(`${AutorPublic1.name} creado`);
//     autores.push(AutorPublic1._id);
//     return AutorPublic.create({
//         name: "nombreAutorPublic2",
//         lastname: "apellidoAutorPublic2",
//         nationality: "colombiana",
//         age: 54
//     });
// })
// .then((AutorPublic2) => {
//     console.log(`${AutorPublic2.name} creado`);
//     autores.push(AutorPublic2._id);
//     return AutorPublic.create({
//         name: "nombreAutorPublic3",
//         lastname: "apellidoAutorPublic3",
//         nationality: "venezolana",
//         age: 43
//     })
// })
// .then((AutorPublic3) => {
//     console.log(`${AutorPublic3.name} creado`);
//     autores.push(AutorPublic3._id);
//     return Libros.create({
//         title: "libroINVESTIGACIÓN2",
//         autores: autores,
//         editorial: "editoriaUNIVERSITARIA",
//         anyo: 2016,
//         language: "espanñol",
//         nPagians: 430
//     });
// })
// .then((libros) => {
//     console.log(`El ${libros.title} ha sido creado`);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// });

// AutorPublic.updateOne({_id: "609d5e6626dda11ddca0147d"}, {publicaciones: ["609d5c858862df44bcd71773", "609d5e6626dda11ddca0147e"]})
// .then( autorActualizado => console.log(autorActualizado))
// .catch( error => console.log(error))

// Libros.updateOne({_id: "609d2a0c1387922de0ef6b5e"}, {publicaciones: ["609d55d676429539144d47da", "609d562deaa22b543c4b3aaf"]})
// .then( autoresActualizado => console.log(autoresActualizado))
// .catch( error => console.log(error))

// AutorPublic.findById("609d5e6626dda11ddca0147d").populate("publicaciones").exec()
// .then((publicaciones) => {
//     console.log(publicaciones);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// })

// AutorPublic.findById("609d55d676429539144d47da").populate("publicaciones").exec()
// .then((publicaciones) => {
//     console.log(publicaciones);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// })

// Libro.find()
// .then((libros) => {
//     console.log(libros);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
//     mongoose.disconnect();
// });