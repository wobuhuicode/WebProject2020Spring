var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'yourpassword',
    database: 'sys'
});
connection.connect();

module.exports = {
    connection,
};