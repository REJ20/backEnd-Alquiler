const { Pool } = require ('pg');

//conexion a la base de datos
const db = new Pool ({
    user: 'postgres',
    password: 'a1s2d3f4.',
    host: 'localhost',
    port: 5432,
    database: 'dbrent'
});

module.exports = db;
