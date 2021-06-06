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

// let sql = "SELECT mark_id, mark FROM martesretos.marks WHERE (mark_id BETWEEN 1 AND 20 OR mark > 80) AND date BETWEEN '2020-01-01' AND '2020-12-31';";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("id y nota de los alumnos que tienen un id entre 1 y 20, o que tiene una nota mayor que 80 y la nota es del año pasado:");
//     console.log(result);
// });

// let sql = "SELECT subject_id, AVG(mark) FROM martesretos.marks WHERE date BETWEEN '2020-01-01' AND '2020-12-31' GROUP BY subject_id;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Media de las notas que se han dado en el último año por asignatura:");
//     console.log(result);
// });

let sql = "SELECT student_id, AVG(mark) FROM martesretos.marks WHERE date BETWEEN '2020-01-01' AND '2020-12-31' GROUP BY student_id;";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Media aritmética de las notas que se han dado el último año por alumno:");
    console.log(result);
});

SELECT first_name, group_id FROM martesretos.students JOIN martesretos.subject_teacher ON (students.group_id = subject_teacher.group_id);

connection.end();