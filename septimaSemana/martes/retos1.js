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

/************************************** BASE DE DATOS Y SUS TABLAS ********************************************/

// let sql = "CREATE SCHEMA martesretos2";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Base de datos Creado");
//     console.log(result);
// });

// let sql = "CREATE TABLE martesretos2.marks (mark_id INT NOT NULL AUTO_INCREMENT, student_id INT NULL, subject_id INT NULL, date DATE NULL, mark INT NULL, PRIMARY KEY (mark_id))";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla creada");
//     console.log(result);
// });

// let sql = "CREATE TABLE martesretos2.subjects (subject_id INT NOT NULL AUTO_INCREMENT, title VARCHAR(45) DEFAULT NULL, PRIMARY KEY (subject_id))";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla creada");
//     console.log(result);
// });

// let sql = "CREATE TABLE martesretos2.students (student_id INT NOT NULL AUTO_INCREMENT, first_name VARCHAR(45) NULL, last_name VARCHAR(45) NULL, group_id INT NULL, PRIMARY KEY (student_id))";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla creada");
//     console.log(result);
// });

// let sql = "ALTER TABLE martesretos2.marks ADD INDEX student_id_idx (student_id ASC) VISIBLE";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla alterada");
//     console.log(result);
// });

// let sql = "ALTER TABLE martesretos2.marks ADD CONSTRAINT student_id FOREIGN KEY (student_id) REFERENCES martesretos2.students (student_id) ON DELETE CASCADE ON UPDATE CASCADE";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla alterada");
//     console.log(result);
// });

// let sql = "CREATE TABLE martesretos2.groups (group_id INT NOT NULL AUTO_INCREMENT, name VARCHAR(45) NULL, PRIMARY KEY (group_id));";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla creada");
//     console.log(result);
// });

// let sql = "CREATE TABLE martesretos2.subject_teacher (subject_id INT NOT NULL, teacher_id VARCHAR(45) NOT NULL, group_id VARCHAR(45) NOT NULL, PRIMARY KEY (subject_id, teacher_id, group_id));";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla creada");
//     console.log(result);
// });

// let sql = "CREATE TABLE martesretos2.teachers (teacher_id INT NOT NULL, first_name VARCHAR(45) NULL, last_name VARCHAR(45) NULL, PRIMARY KEY (teacher_id));";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla creada");
//     console.log(result);
// });

// let sql = "ALTER TABLE martesretos2.teachers CHANGE COLUMN teacher_id teacher_id INT NOT NULL AUTO_INCREMENT;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla alterada");
//     console.log(result);
// });

// let sql = "ALTER TABLE martesretos2.subject_teacher ADD CONSTRAINT subject_id FOREIGN KEY (subject_id) REFERENCES martesretos.subjects (subject_id) ON DELETE CASCADE ON UPDATE CASCADE;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla alterada");
//     console.log(result);
// });

// let sql = "ALTER TABLE martesretos2.teachers ADD CONSTRAINT teacher_id FOREIGN KEY (teacher_id) REFERENCES martesretos2.subject_teacher (subject_id) ON DELETE CASCADE ON UPDATE CASCADE;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla alterada");
//     console.log(result);
// });

// let sql = "ALTER TABLE martesretos2.students ADD INDEX group_id_idx (group_id ASC) VISIBLE;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla alterada");
//     console.log(result);
// });

// let sql = "ALTER TABLE martesretos2.students ADD CONSTRAINT group_id FOREIGN KEY (group_id) REFERENCES martesretos.groups (group_id) ON DELETE CASCADE ON UPDATE CASCADE;";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla alterada");
//     console.log(result);
// });

// let sql = "DROP TABLE paraBorrar";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Tabla borrada");
//     console.log(result);
// });


/************************************** BASE DE DATOS Y SUS TABLAS ********************************************/

// let sql = "INSERT INTO martesretos.teachers (teacher_id, first_name, last_name) VALUES (3, \"rofeName3\", \"ProfeApellido3\");";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertardo");
//     console.log(result);
// });

// let sql = "INSERT INTO martesretos.students (student_id, first_name, last_name) VALUES ('5', 'Luis', 'Castrillo');";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO martesretos.groups (group_id, name) VALUES ('2', 'Data Science');";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

// let sql = "INSERT INTO martesretos.subjects (subject_id, title) VALUES ('2', 'Presencial');";
// connection.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Dato insertado");
//     console.log(result);
// });

connection.end();