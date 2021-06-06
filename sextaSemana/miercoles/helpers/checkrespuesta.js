const mongoose = require('mongoose');

function checkRespuesta(err, res){
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
};

module.exports = { checkRespuesta };