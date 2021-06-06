const express = require('express');
const app = express();
const mongoose = require('mongoose');
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
    } else {
        obtenerFotos(name).then((result) => {
            res.send({error: false, codigo: 200, mensaje: `Fotos de ${name}:`, resultado: result});
        }).catch((err) => {
            res.send({error: true, codigo: 200, mensaje: err});
        })
    }
});

app.post('/photos', (req, res) => {
    let name = req.body.name;
    let url = req.body.url;
    let title = req.body.title;
    let description = req.body.description;
    if (name != null && title != null && description != null) {
        subidaFoto(name, url, title, description).then((result) => {
            res.send({error: false, codigo: 200, mensaje: 'Foto creada en la base de datos', resultado: result});
        }).catch((err) => {
            res.send({error: true, codigo: 200, mensaje: err});
        })
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
        eliminarFoto(name, title).then((result) => {
            res.send({ error: false, codigo: 200, mensaje: `Borrado la foto ${name} con el titulo ${title}`, resultado: result})
        }).catch((err) => {
            res.send({error: true, codigo: 200, mensaje: err});
        })
    } else if (name != null && title == null) {
        eliminarTodasFotos(name).then((result) => {
            res.send({ error: false, codigo: 200, mensaje: `Borradas todas las fotos del ususario ${name}`, resultado: result})
        }).catch((err) => {
            res.send({error: true, codigo: 200, mensaje: err});
        })
    }
});

app.put('/follow', (req, res) => {
    let origen = req.body.origen;
    let destino = req.body.destino;
    if (origen != null && destino != null) {
        seguir(origen, destino).then((result) => {
            res.send({ error: false, codigo: 200, mensaje: `El usuario de nombre ${destino} ahora es seguido por ${origen}`, resultado: result});
        }).catch((err) => {
            res.send({error: true, codigo: 200, mensaje: err});
        })
    } else {
        res.send({ error: true, codigo: 200, mensaje: 'No has introducido correctamente el usuario, origen y destino, en el body'});
    }
});

app.put('/unfollow', (req, res) => {
    let origen = req.body.origen;
    let destino = req.body.destino;
    if (origen != null && destino != null) {
        dejarSeguir(origen, destino).then((result) => {
            res.send({ error: false, codigo: 200, mensaje: `El usuario de nombre ${origen} ha dejado de seguir al usuario ${destino}`, resultado: result});
        }).catch((err) => {
            res.send({error: true, codigo: 200, mensaje: err});
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