var express = require('express');
var app = express();

app.set('view engine', 'ejs');




app.listen(3000, function(){
    console.log('Servidor rodando ');
});

app.get('/',function(req, res){
    res.render('secao/tecnologia');
});




app.get('/tecnologia',function(req, res){
    res.render('secao/tecnologia');
});
