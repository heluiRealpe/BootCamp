const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

let profesional = require('./profesional');


app.get('/',
    function(request, response) {
        let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
        response.send(respuesta);
    }
);

app.get('/profesional',
    function(request, response) {
        let respuesta;
        if (profesional.Profesional != null) {
            respuesta = ;
        } else {
            respuesta = { error: true, codigo: 200, mensaje: 'El profesional no existe'};
        }
        response.send(respuesta);
    }
);

app.get('/profesional/:name',
    function(request, response) {
        let name = request.query.name;
        let respuesta;
        if (profesional != null & (!name === profesional.Profesional.name)){
            response.send(profesional);
        } else {
            response.send({ error: true, codigo: 200, mensaje: 'El profesional no existe'});
        }
    }
);

app.get('/profesional',
    function(request, response) {
        let name = request.query.name;
        let respuesta;
        if (profesional.Profesional != null & (!name || name === profesional.Profesional.name)) {
            respuesta = profesional.Profesional;
        } else {
            respuesta = { error: true, codigo: 200, mensaje: 'El profesional no existe'};
        }
        response.send(respuesta);
    }
);

app.post('/profesional',
    function(request, response) {
        let respuesta;
        if (profesional === null) {
            profesional = { nombre: request.body.profesional1, edad: request.body.edad1};
            respuesta = { error: false, codigo: 200, mensaje: 'profesional creado', resultado: profesional};
        } else {
            respuesta = { error: true, codigo: 200, mensaje: 'profesional ya existe', resultado: null};
        }
        response.send(respuesta);
    }
);

app.put('/profesional', (request, response) => {
    function(request, response) {
        let respuesta;
        if (profesional != null) {
            profesional.Profesional.name = request.body.name1;
            profesional.Profesional.age = request.body.age1
        }
    }
    
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

