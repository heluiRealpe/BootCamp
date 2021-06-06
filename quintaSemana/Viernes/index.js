const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', (request, response) => {
    readFile('./imdb.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('sorry, out of order');
        }
        response.send(html);
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});