const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
const Photo = require('./models/photos');

mongoose.connect('mongodb://localhost:27017/codenotch', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    res.send(respuesta);
});

app.get('/photos', (req, res) => {
    let name = req.query.name;
    if (name == null) {
        res.send({error: true, codigo: 200, mensaje: 'No has introducido un usuario ....?name='});
    } else if (name != null) {
        Photo.find({name: name})
        .then((photo) => {
            return res.send({error: false, codigo: 200, mensaje: `Fotos de ${name} subida:`, resultado: photo});
        })
        .catch((err) => {
            return err;
        });
    }
});

app.post('/photos', (req, res) => {
    let name = req.body.name;
    let url = req.body.url;
    let title = req.body.title;
    let description = req.body.description;
    if (name != null && title != null && description != null) {
        Photo.create({name: name, url: url, title: title, description: description})
        .then((photo) => {
            return res.send({error: false, codigo: 200, mensaje: `Fotos de ${name}:`, resultado: photo});
        })
        .catch((err) => {
            return err;
        });
    } else {
        res.send({error: true, codigo: 200, mensaje: 'No has introducido todo los datos necesarios en el body'});
    }
});

app.delete('/photos', (req, res) => {
    let name = req.body.name;
    let title = req.body.title;
    if (name == null && title == null) {
        res.send({ error: true, codigo: 200, mensaje: `No has introducido los datos en el body de Postman`});
    } else if (name != null && title != null) {
        Photo.deleteOne({name: name, title: title})
        .then((elim) => {
            return res.send({error: false, codigo: 200, mensaje: `Foto de ${name} eliminada:`, resultado: elim});
        })
        .catch((err) => {
            return err;
        })
        respuesta = { error: false, codigo: 200, mensaje: `Borrado el ususario ${name} con el titulo ${title}`};
    } else if (name != null && title == null) {
        Photo.deleteMany({name: name})
        .then((elim) => {
            return res.send({error: false, codigo: 200, mensaje: `Todas las fotos de ${name} han sido eliminadas:`, resultado: elim});
        })
        .catch((err) => {
            return err;
        })
    }
});

app.put('/follow', (req, res) => {
    let origen = req.body.origen;
    let destino = req.body.destino;
    if (origen != null && destino != null) {
        User.updateOne({name: destino}, {follow: origen})
        .then((resultado) => {
            return res.send({error: false, codigo: 200, mensaje: `El usuario de nombre ${destino} ahora es seguido por ${origen}`, resultado: resultado});
        })
        .catch((err) => {
            return err;
        });
    } else {
        res.send({ error: true, codigo: 200, mensaje: 'No has introducido correctamente el usuario origen y destino en el body'});
    }
});

app.put('/unfollow', (req, res) => {
    let origen = req.body.origen;
    let destino = req.body.destino;
    if (origen != null && destino != null) {
        User.updateOne({name: origen, follow: destino}, {follow: ""})
        .then((resultado) => {
            return res.send({error: false, codigo: 200, mensaje: `El usuario de nombre ${origen} ha dejado de seguir al usuario ${destino}`, resultado: resultado});
        })
        .catch((err) => {
            return err;
        });
    } else {
        res.send({ error: true, codigo: 200, mensaje: 'No has introducido correctamente el usuario origen y destino en el body'});
    }
});

app.use((req, res, next) => {
    respuesta = {error: true, codigo: 404, mensaje: 'URL no encontradas'};
    res.status(404).send(respuesta);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});