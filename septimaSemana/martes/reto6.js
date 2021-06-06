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

let sql = "SELECT COUNT(*) FROM students;;";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Total de elementos de la tabla estudiantes:");
    console.log(result);
});

connection.end();