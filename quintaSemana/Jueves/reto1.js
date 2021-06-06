const http = require('http');

const app = JSON.stringify({
    ok: 'true',
    message: 'Recibido!'
})
const app2 = JSON.stringify({
    ok: 'true',
    message: 'Adios!'
})

const server = http.createServer(function(request, response) {
    console.log('\n- PETICIÓN RECIBIDA DEL CLIENTE: ');
    console.log('- URL de la petición: ' + request.url);
    console.log('- Método de la petición: ' + request.method);
    console.log('- Content-type de la petición: ' + JSON.stringify(request.headers['content-type']));
    console.log('- Content-length de la petición: ' + JSON.stringify(request.headers['content-length']));
    console.log('- User-agent de la petición: ' + JSON.stringify(request.headers['user-agent']));
    response.writeHead(200, {'Content-Type': 'application/json'});
        if (request.url == '/bye') {
        response.write(app2);
    } else {
        response.write(app);
    }
    response.end();
});
server.listen(3000);