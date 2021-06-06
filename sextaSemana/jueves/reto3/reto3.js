const mongoose = require('mongoose');
const fakerator = require('fakerator')("es-ES");
const User = require('./models/user');
const Photo = require('./models/photos');

mongoose.connect('mongodb://localhost:27017/juevesRetos3', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// setInterval(() => {
//     let follows = [];
//     let photos = [];
//     Photo.create({
//         name: fakerator.names.firstName(),
//         url: fakerator.internet.url(),
//         title: fakerator.lorem.word(),
//         description: fakerator.lorem.sentence()
//     })
//     .then((photo) => {
//         console.log(`${photo.name} creada`);
//         photos.push(photo);
//         return Photo.create({
//             name: fakerator.names.firstName(),
//             url: fakerator.internet.url(),
//             title: fakerator.lorem.word(),
//             description: fakerator.lorem.sentence()
//         });
//     })
//     .then((photo) => {
//         console.log(`${photo} creada`);
//         photos.push(photo);
//         return User.create({
//             login: fakerator.internet.userName(),
//             password: fakerator.internet.password(9),
//             name: fakerator.names.firstName(),
//             surname: fakerator.names.lastName(),
//             age: fakerator.date.age(18, 65),
//             Comments: fakerator.lorem.sentence(),
//             rol: 'Developer',
//             adress: fakerator.address.street(),
//             phone: fakerator.phone.number(),
//             email: fakerator.internet.email(),
//             photos: photos
//         });
//     })
//     .then((user) => {
//         console.log(`${user.name} creado`);
//         follows.push(user);
//         return User.create({
//             login: fakerator.internet.userName(),
//             password: fakerator.internet.password(9),
//             name: fakerator.names.firstName(),
//             surname: fakerator.names.lastName(),
//             age: fakerator.date.age(18, 65),
//             Comments: fakerator.lorem.sentence(),
//             rol: 'Developer',
//             adress: fakerator.address.street(),
//             phone: fakerator.phone.number(),
//             email: fakerator.internet.email(),
//             photos: photos,
//             follows: follows
//         })
//     })
//     .then((user) => {
//         console.log(`${user.name} creado`);
//         follows.push(user);
//         return User.create({
//             login: fakerator.internet.userName(),
//             password: fakerator.internet.password(9),
//             name: fakerator.names.firstName(),
//             surname: fakerator.names.lastName(),
//             age: fakerator.date.age(18, 65),
//             Comments: fakerator.lorem.sentence(),
//             rol: 'Developer',
//             adress: fakerator.address.street(),
//             phone: fakerator.phone.number(),
//             email: fakerator.internet.email(),
//             photos: photos,
//             follows: follows
//         })
//     })
//     .then((user) => {
//         console.log(`${user} creado`);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// }, 200);


/******************** FUNCION EXPLORA **********************************/

// function explora(id) {
//     User.aggregate().match({photos : { $not: { $all: [id]}}}).group({_id: "$photos"}).limit(9).then((result) => {
//         console.log(result);
//         mongoose.disconnect();
//     }).catch((err) => {
//         console.log(err);
//         mongoose.disconnect();
//     });
// }

// explora("60aa57d354a64212442081d3");

/******************** FUNCION TIMELINE USANDO AGREGADOS **********************************/

function timeline(id) {
    User.aggregate().match({_id: id}).group({$lookup: {from: "photos", as: "photo", let: { _id: "all"}}}).then((resultado) => {
        console.log(resultado);
    })
    .then(() => {
        mongoose.disconnect();
    })
    .catch((error) => {
        console.log(error);
        mongoose.disconnect();
    })
};

timeline("60aa57d354a64212442081d3");