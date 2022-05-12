const mysql = require('mysql');
const mysqlconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crib",
    multipleStatements: true
})

mysqlconnection.connect((err) => {
    if (!err)
        console.log('DB connection success');
    else
        console.log('DB connection failed :' + JSON.stringify(err, undefined, 2));
})

module.exports = mysqlconnection;