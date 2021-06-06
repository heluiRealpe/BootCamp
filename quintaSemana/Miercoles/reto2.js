// Event Loop Timers

let ahora = Date.now();

setInterval(function() {
    console.log(Date.now() - ahora);
    console.log('han pasado 5 segundos');
    ahora = Date.now();
}, 5000);