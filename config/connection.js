const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Take!2over",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ' + err.stack);
        return;
    } 
    console.log('connected as id ' + connection.threadId);
    
});

module.exports = mysql;