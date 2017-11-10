module.exports = function(app){
    app.get('/noticias',function(req, res){
       
        var mysql = require('mysql');
        
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "portal_noticias"
        });
        
        con.connect(function(err){
            if (err) throw err;
            console.log("DB Connected!");
        });
        
        con.query('select * from noticias',function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });      
       
       
        //res.render('noticias/noticias');
    });

    
};