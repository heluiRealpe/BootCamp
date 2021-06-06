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

let sql = "SELECT students.first_name, students.last_name, title FROM martesretos.students JOIN martesretos.marks ON (students.student_id = marks.student_id) JOIN martesretos.subjects ON (marks.subject_id = subjects.subject_id);";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Nombres y apellidos de los alumnos, y nombres de las asignaturas en las que están apuntados:");
    console.log(result);
});

connection.end();