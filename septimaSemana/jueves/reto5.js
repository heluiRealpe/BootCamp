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

let sql = "SELECT DISTINCT students.first_name, students.last_name, COUNT(subject_id) AS AsignaturasNum, AVG(marks.mark) AS notaPromedio, MAX(mark) AS NotaMax, MIN(mark) AS NotaMin FROM martesretos.students JOIN martesretos.marks ON (students.student_id = marks.student_id) GROUP BY students.first_name;";
connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Nombre y apellido de cada alumno, número de asignaturas cursadas, nota media de todas ellas, nota más alta y más baja:');
    console.log(result);
});

connection.end();