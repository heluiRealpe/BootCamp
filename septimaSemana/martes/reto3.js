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

// let sql = "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (4, \"ProfeName4\", \"ProfeApellido4\");";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertardo");
//     console.log(result);
// });

// let sql = "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (5, \"ProfeName5\", \"ProfeApellido5\");";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertardo");
//     console.log(result);
// });

// let sql = "INSERT INTO students (student_id, first_name, last_name) VALUES ('6', 'EstudianteName6', 'EstudianteApellido6');";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO students (student_id, first_name, last_name) VALUES ('7', 'EstudianteName7', 'EstudianteApellido7');";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO marks (mark_id, student_id, subject_id, date, mark) VALUES ('5', '5', '2', '2021-01-10', 60);";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO marks (mark_id, student_id, subject_id, date, mark) VALUES ('6', '6', '2', '2021-01-15', 90);";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO marks (mark_id, student_id, subject_id, date, mark) VALUES ('7', '7', '2', '2020-12-18', 80);";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO students (student_id, first_name, last_name) VALUES ('8', 'EstudianteName8', 'EstudianteApellido8');";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO students (student_id, first_name, last_name) VALUES ('9', 'EstudianteName9', 'EstudianteApellido9');";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (6, \"ProfeName6\", \"ProfeApellido6\");";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertardo");
//     console.log(result);
// });

// let sql = "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES (7, \"ProfeName7\", \"ProfeApellido7\");";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertardo");
//     console.log(result);
// });

// let sql = "INSERT INTO subject_teacher (subject_id, teacher_id, group_id) VALUES (2, 1 , 1);";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertardo");
//     console.log(result);
// });

// let sql = "INSERT INTO marks (mark_id, student_id, subject_id, date, mark) VALUES (8, 8, 2, '2021-01-10', 60);";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO marks (mark_id, student_id, subject_id, date, mark) VALUES (9, 9, 1, '2021-04-28', 40);";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

connection.end();