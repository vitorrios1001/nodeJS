//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
    
        app.get('/noticia',function(req, res){ 
            
            var con = app.config.dbConnection();
                   
            con.query('select * from noticias where id_noticia = 2',function(error, result){
                res.render("noticias/noticia", {noticia : result});
            });      
           
        });
   
        
 };