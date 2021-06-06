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

let sql = "";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte:');
    console.log(result);
});

connection.end();