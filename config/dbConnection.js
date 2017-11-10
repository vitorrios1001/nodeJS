var mysql = require('mysql');

var connMySQL = function(){
    console.log('DB Connected');
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "portal_noticias"
    }); 
    
}

module.exports = function(){
    console.log('AutoLoad aki do banco')
    return connMySQL;
}