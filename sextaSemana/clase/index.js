const mongoose = require('mongoose')
const Actor = require('./models/actor')
const Pelicula = require('./models/pelicula')
const Hijo = require('./models/hijo')
const Padre = require('./models/padre')
const Autor = require('./models/autor')
const Libro = require('./models/libro')
// const { checkRespuesta } = require('./helpers/checkrespuesta')

mongoose.connect('mongodb://localhost:27017/codenotch2', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

// RELACION 1 A 1 ACTOR-PELICULA

// Actor.create({
//     nombre: "Orlando Bloom",
//     edad: 60,
//     nacionalidad: "Americano"
// })
// .then( ( actor ) => {
//     console.log(actor);

//     mongoose.disconnect()
// })
// .catch( (error) => {
//     console.log(error);
//     mongoose.disconnect()

// })

// Actor.updateOne({ _id: "609ce678801f730b505d2486"}, { pelicula: "609ce51f2358d94e2433cd56"})
// .then( ( update ) => {
//     console.log(update);

//     mongoose.disconnect()
// })
// .catch( (error) => {
//     console.log(error);
//     mongoose.disconnect()

// })

// Pelicula.create({
//     titulo: "El señor de los Anillos",
//     genero: "Aventuras",
//     duracion: 180
// })
// .then( (pelicula) => {
//     console.log(pelicula);

//     return Actor.create({
//         nombre: "Viggo Mortensen",
//         edad: 60,
//         nacionalidad: "Americano",
//         pelicula: pelicula._id
//     })
// })
// .then( ( actor ) => {
//     console.log(actor);

//     mongoose.disconnect()
// })
// .catch( (error) => {
//     console.log(error);
//     mongoose.disconnect()

// })

// Actor.findById("609ce678801f730b505d2486").populate("pelicula").exec()
// .then( ( actor ) => {
//     console.log(actor);
//     mongoose.disconnect()
// })
// .catch( ( error ) => {
//     console.log(error);
//     mongoose.disconnect()
// })


// RELACION 1 A MUCHOS PADRE-HIJOS


// let ids = []

// Hijo.create({
//     nombre: "Jorge",
//     apellidos: "Rodríguez",
//     edad: 29
// })
// .then( ( hijo1 ) => {
//     console.log(`${hijo1.nombre} ha sido creado`);

//     ids.push(hijo1._id)

//     return Hijo.create({
//         nombre: "Javier",
//         apellidos: "Rodríguez",
//         edad: 31
//     })
// })
// .then( ( hijo2 ) => {
//     console.log(`${hijo2.nombre} ha sido creado`);

//     ids.push(hijo2._id)

//     return Hijo.create({
//         nombre: "Juan",
//         apellidos: "Rodríguez",
//         edad: 30
//     })
// })
// .then( ( hijo3 ) => {
//     console.log(`${hijo3.nombre} ha sido creado`);

//     ids.push(hijo3._id)

//     return Padre.create({
//         nombre: "Francisco",
//         apellidos: "Rodríguez",
//         edad: 67,
//         hijos: ids
//     })

// })
// .then( ( padre ) => {
//     console.log(`${padre.nombre}, el padre, ha sido creado`);
//     mongoose.disconnect()
// })
// .catch( ( error ) => {
//     console.log(error);
//     mongoose.disconnect()

// })


// Padre.findById('609cea62b7e25246404bf7a4').populate('hijos').exec()
// .then( ( padre ) => {
//     console.log(padre);
//     mongoose.disconnect()

// })
// .catch( ( error ) => {
//     console.log(error);
//     mongoose.disconnect()
// })

// RELACIONES MUCHOS A MUCHOS LIBROS-AUTORES

// let ids = []

// Autor.create({
//     nombre: "Jorge",
//     apellidos: "Rodríguez",
//     edad: 29
// })
// .then( ( autor1 ) => {
//     console.log(`${autor1.nombre} ha sido creado`);

//     ids.push(autor1._id)

//     return Autor.create({
//         nombre: "Javier",
//         apellidos: "Rodríguez",
//         edad: 31
//     })
// })
// .then( ( autor2 ) => {
//     console.log(`${autor2.nombre} ha sido creado`);

//     ids.push(autor2._id)

//     return Autor.create({
//         nombre: "Juan",
//         apellidos: "Rodríguez",
//         edad: 30
//     })
// })
// .then( ( autor3 ) => {
//     console.log(`${autor3.nombre} ha sido creado`);

//     ids.push(autor3._id)

//     return Libro.create({
//         titulo: "El señor de los Anillos",
//         genero: "Aventuras",
//         nPaginas: 1200,
//         autores: ids
//     })

// })
// .then( ( libro ) => {
//     console.log(`${libro.nombre}, el libro, ha sido creado`);
//     mongoose.disconnect()
// })
// .catch( ( error ) => {
//     console.log(error);
//     mongoose.disconnect()

// })

// Libro.create({
//     titulo: "El señor de los Anillos",
//     genero: "Aventuras",
//     nPaginas: 1200,
//     autores: ["609cee1539c9fe48d4557678"]
// })
// .then( libro => console.log(libro))
// .catch( error => console.log(error))

// Autor.updateOne({_id: "609cee1539c9fe48d4557678"}, {libros: ["609cee1539c9fe48d455767b", "609ceec202cca14a04050608"]})
// .then( autorActualizado => console.log(autorActualizado))
// .catch( error => console.log(error))

// Libro.findById('609cee1539c9fe48d455767b').populate('autores').exec()
// .then( libro => console.log(libro))
// .catch( error => console.log(error))

// Autor.findById('609cee1539c9fe48d4557678').populate('libros').exec()
// .then( autor => console.log(autor))
// .catch( error => console.log(error))


