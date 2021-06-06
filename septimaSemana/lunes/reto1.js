const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2417906',
    database: 'codenotch'
})

connection.connect((error) => {
    if(error){
        console.log(error)
    } else{
        console.log('Conexión correcta.')

    }
});

// let sql = "ALTER TABLE persona ADD edad INT";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla creada");
//     console.log(result);
// });

// let sql = "CREATE TABLE paraBorrar (idPersona INT, dni VARCHAR(255))";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla creada");
//     console.log(result);
// });


let sql = "DROP TABLE paraBorrar";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Tabla borrada");
    console.log(result);
});