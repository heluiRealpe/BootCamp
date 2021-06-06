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

let sql = "SELECT teachers.first_name, teachers.last_name, title FROM martesretos.teachers JOIN martesretos.subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) JOIN martesretos.subjects ON (subjects.subject_id = subject_teacher.subject_id) ORDER BY first_name;";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`Nombres y apellidos de los profesores y los nombres de las asignaturas que imparten: `);
    console.log(result);
});

connection.end();