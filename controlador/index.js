var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'patata',
    database: 'midb'
});

connection.connect();

connection.query('SELECT * FROM  tabla1', function(err, rows) {
    if (err) throw err;
    console.log('The number is: ', rows[0].id);
    console.log('The name is: ', rows[0].nombre);
    console.log('The number is: ', rows[1].id);
    console.log('The name is: ', rows[1].nombre);
    console.log('The numer is: ', rows[7].id);
    console.log('The name is: ', rows[7].name);
});

connection.query("INSERT INTO tabla1 (id, nombre) VALUES (11,'Konata')");

connection.end();