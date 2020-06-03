var mysql = require('mysql');



//修改评分
function update_star(game_id,game_name,user_id, comment,score,callback){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('insert into comments values(?,?,?,?,?)', [game_id, game_name, user_id, comment, score],function (error, result,fields) {
        if (error) throw error;
        con.end();
        callback(result);
    });
}
//获取新的评分值
function update_now(game_id,callback){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('select AVG(STAR) as score_new from comments where game_id = '+ game_id,function (error, result,fields) {
        if (error) throw error;
        con.end();
        set_new_star(game_id, result[0].score_new.toFixed(2),function (ret) {
            callback(result);
        });
    });
}
//更新评分
function set_new_star(game_id,score,callback){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('update game set star = ? where game_id = ?',[score, game_id],function (error, result,fields) {
        if (error) throw error;
        con.end();
        callback(result);
    });
}

module.exports = {
    update_star,
    update_now,
    set_new_star
};