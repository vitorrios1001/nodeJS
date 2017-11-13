//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    app.get('/noticias',function(req, res){ 
        
        var con = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel; 

        noticiasModel.getNoticias(con, function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
        
              
       
    });

    
};