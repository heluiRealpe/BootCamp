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

let sql = "SELECT teachers.first_name, teachers.last_name, subjects.title AS asignatura, AVG(mark) AS notaMedia FROM martesretos.teachers JOIN martesretos.subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) JOIN martesretos.subjects ON (subject_teacher.subject_id = subjects.subject_id) JOIN martesretos.marks ON (subjects.subject_id = marks.subject_id) GROUP BY first_name, title;";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Nombre y Apellido de todos los profesores, la asignatura que imparten y la nota media de la asignatura que imparten: ');
    console.log(result);
});

connection.end();