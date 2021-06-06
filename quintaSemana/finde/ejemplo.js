// EJEMPLO DE API REST (Creación y Método GET)
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let usuario = null;

app.get('/', (request, response) => {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);    
});

// app.get('/usuario', (request, response) => {
//         let respuesta;
//         if (usuario != null) {
//             respuesta = usuario;
//         } else {
//             respuesta = { error: true, codigo: 200, mensaje: 'El usuario no existe'};
//         }
//         response.send(respuesta);
//     }
// );

// EJEMPLO API REST (Paso de Parámetros en GET)

app.get('/usuario/:name', (request, response) => {
        let name = request.params.name;
        if (usuario != null && name === usuario.nombre) {
            response.send(usuario);
        } else {
            response.send({error: true, codigo: 200, mensaje: 'El usuario no exise'});
        }
    }
);

app.get('/usuario', (request, response) => {
        let name = request.query.name;
        let respuesta;
        if (usuario != null && (!name || name === usuario.nombre)) {
            respuesta = usuario;
        } else {
            respuesta = {error: true, codigo: 200, mensaje: 'El usuario no exise'};
        }
        response.send(respuesta);
    }
);

// EJEMPLO API REST (Método POST)

app.post('/usuario', (request, response) => {
        let respuesta;
        if (usuario === null) {
            usuario = {nombre: request.body.nombre1, 
                        apellidos: request.body.apellido1};

            respuesta = {error: false, codigo: 200, 
                        mensaje: 'Usuario creado', resultado: usuario};
        } else {
            respuesta = {error: true, codigo: 200, 
                        mensaje: 'Usuario ya existe', resultado: null};
        }
        response.send(respuesta);
    }
);

// EJEMPLO API REST (Método PUT)

app.put('/usuario', (request, response) => {
    let respuesta;
    if (usuario != null) {
        usuario.nombre = request.body.nombre1;
        usuario.apellidos = request.body.apellido1;
        respuesta = { error: false, codigo: 200, mensaje: 'Usuario actualizado', resultado: usuario };
    } else {
        respuesta = { error: true, codigo: 200, mensaje: 'El usuario no exise', resultado: usuario };
    }
    response.send(respuesta);
});

// EJEMPLO API REST (Método DELETE)

app.delete('/usuario', (request, response) => {
    let respuesta;
    if (usuario != null) {
        usuario = null;
        respuesta = { error: false, codigo: 200, mensaje: 'Usuario', resultado: usuario };
    } else {
        respuesta = { error: true, codigo: 200, mensaje: 'El usuario no existe', resultado: usuario };
    }
    response.send(respuesta);
})

// EJEMPLO API REST (Middleware)

app.use((request, response, next) => {
    respuesta = { error: true, codigo: 404, mensaje: 'URL no encontrada'};
    response.status(404).send(respuesta);
});

app.listen(3000);