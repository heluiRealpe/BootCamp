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

let sql = "SELECT DISTINCT students.first_name, COUNT(*) AS totalAsignaturas FROM martesretos.subjects JOIN martesretos.marks ON (subjects.subject_id = marks.subject_id) JOIN martesretos.students ON (marks.student_id = students.student_id) JOIN martesretos.subject_teacher ON (students.group_id = subject_teacher.group_id) JOIN martesretos.teachers ON (subject_teacher.teacher_id = teachers.teacher_id) WHERE (teachers.teacher_id = 1 AND (subjects.subject_id = 1 OR subjects.subject_id = 2)) GROUP BY students.first_name ORDER BY totalAsignaturas DESC;";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Nombre de los alumnos y la cantidad total de asignaturas por alumno que sean HTML o TypeScrip y cuyo profesor es Jose.");
    console.log(result);
});

connection.end();