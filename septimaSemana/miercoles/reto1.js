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

// let sql = "SELECT AVG(mark) FROM martesretos.marks WHERE student_id = 1;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Nota media de los alumnos de la asignatura 1");
//     console.log(result);
// });

// let sql = "SELECT COUNT(student_id) FROM students;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Número total de alumnos que hay en el bootcamp:");
//     console.log(result);
// });

// let sql = "SHOW COLUMNS FROM martesretos.groups;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Listado de todos los campos de la tabla 'groups':");
//     console.log(result);
// });

// let sql = "DESCRIBE martesretos.groups;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Listado de todos los campos de la tabla 'groups':");
//     console.log(result);
// });

// let sql = "UPDATE martesretos.marks SET mark = null WHERE mark > 50 AND date > '2020-01-01' AND date < '2020-12-31';";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Eliminadas todas las notas de la base de datoss que están por encima de 50 y son del año pasado:");
//     console.log(result);
// })

// let sql = "SELECT * FROM martesretos.students WHERE year_income = 2021;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("A continuación los datos de todos los estudiantes que están en el BootCamp éste año:");
//     console.log(result);
// })

let sql = "SELECT group_id, COUNT(*) AS num_teachers FROM martesretos.subject_teacher GROUP BY group_id ;";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Número de profesores por cada asignatura:");
    console.log(result);
});

connection.end();