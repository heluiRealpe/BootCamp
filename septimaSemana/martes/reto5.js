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

// let sql = "SELECT * FROM martesretos.marks WHERE subject_id = 1 AND mark < 50;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Registros de subject_id = 1 y nota menor que 50");
//     console.log(result);
// });

let sql = "UPDATE marks SET mark = 50 WHERE subject_id = 1 AND mark < 50;";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Registros anteriores al año 2011 borrados");
    console.log(result);
});

connection.end();