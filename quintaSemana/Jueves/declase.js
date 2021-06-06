const http = require('http');

const server = http.createServer(function(request, response) {
    console.log('Request received from client');
    console.log('Header Request: ' + request.headers.host);
    console.log('Request Method: ' + request.method);
    console.log('Request Status code: ' + request.statusCode);
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write('Hello from server!');
    response.end();
});

server.listen(3000);