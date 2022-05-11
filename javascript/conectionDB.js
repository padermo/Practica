//importo login.js
import{registro, login}from "./login.js";

//llamamos a mysql
const mysql = require('mysql');

//establece la conexion
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'fabio',
    password: '1234',
    database: 'registro'
});

//inicia la conexion
conexion.connect((err) => {
    if(err){
        throw err;
    }else{
        console.log('La conexion funciona');
    }
});

//mostrar
conexion.query('SELECT * FROM registro', (err, filas) => {
    if(err){
        throw err;
    }else{
        filas.forEach(fila => {
            console.log(fila);
        });
    }
});

//insert
conexion.query('INSERT INTO usuarios(nombre, apellido, email, contraseña) VALUES ()', (err, resultado) => {
    if(err){
        throw err;
    }else{
        console.log(`Registro agregado ${resultado}`);
    }
})

//finaliza la conexion
conexion.end();

