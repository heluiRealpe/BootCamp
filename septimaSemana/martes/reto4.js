const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2417906',
    database: 'martesretos'
})

connection.connect((error) => {
    if(error){
        console.log(error)
    } else{
        console.log('Conexión correcta.')

    }
});


let sql = "DELETE FROM marks WHERE date < '2011-05-18';";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Registros anteriores al año 2011 borrados");
    console.log(result);
});

connection.end();