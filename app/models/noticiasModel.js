module.exports = function(){

    this.getNoticias = function(con, callback){
        con.query('select * from noticias',callback);
    }

    return this;

}