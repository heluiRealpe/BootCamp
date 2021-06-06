const mongoose = require('mongoose');
const fakerator = require('fakerator')("es-ES");
const User = require('./models/user');
const Photo = require('./models/photos');

mongoose.connect('mongodb://localhost:27017/juevesRetos4', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// setInterval(() => {
//     Photo.create({
//         name: fakerator.names.firstName(),
//         url: fakerator.internet.url(),
//         title: fakerator.lorem.word(),
//         description: fakerator.lorem.sentence()
//     })
//     .then((photo) => {
//         console.log(`${photo} creada`);
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
//             photos: photo
//         });
//     })
//     .then((user) => {
//         console.log(`${user} creado`);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// }, 200);

/********************PRIMERA AGREGACIÓN**********************************/

// User.aggregate([{$match: { age: { $gte: 50 }} }]).limit(15).then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// }).catch((err) => {
//     console.log(err);
//     mongoose.disconnect();
// })

/********************SEGUNDA AGREGACIÓN**********************************/

// User.aggregate([{$group: {
//     _id: '$age',
//     count: { $sum: 1 }
//     }}
// ]).limit(30).then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// }).catch((err) => {
//     console.log(err);
//     mongoose.disconnect();
// })

/********************TERCERA AGREGACIÓN**********************************/

User.aggregate([
    { $match: { age: { $lt: 25 } } },
    {
      $group: {
        _id: '$age',
        count: { $sum: 1 }
      }
    }
  ]).then((result) => {
    console.log(result);
    mongoose.disconnect();
}).catch((err) => {
    console.log(err);
    mongoose.disconnect();
})
