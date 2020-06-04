var mysql = require('mysql');

//初始化页面
function information(callback)
{
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('SELECT game_id,name,star from game order by star desc', function (error, results, fields) {
        if (error) throw error;
        con.end();
        callback(results);
    });
}
//通过姓名查询信息
function get_information(id,callback)
{
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('SELECT * from game where name = "' + id + '"', function (error, results, fields) {
        if (error) throw error;
        con.end();
        callback(results);
    });
}
//通过姓名查询信息
function get_comment_information(name,callback)
{
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('SELECT comment,user_id from comments where game_name = "' + name + '"', function (error, results, fields) {
        if (error) throw error;
        con.end();
        callback(results);
    });
}
//通过id查询信息
function get_id_information(id,callback)
{
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('SELECT * from game where game_id = ' + id , function (error, results, fields) {
        if (error) throw error;
        con.end();
        callback(results);
    });
}
//验证姓名是否存在
function exist(name, callback)
{
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('select * from game where name = "' + name + '"', function (error, result,fields) {
        if (error) throw error;
        if(result.length != 0){
            con.end();
            callback(1);
        }else {
            con.end();
            callback(-1);
        }
    });
}
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
//确定用户是否已经评论过了
function exist_comment(game_id, user_id, callback){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('select * from comments where game_id = ? and user_id = ?', [game_id, user_id],function (error, result,fields) {
        if (error) throw error;
        if(result.length != 0){
            con.end();
            callback(1);
        }else {
            con.end();
            callback(-1);
        }
    });
}
//更新评分和自己的评论
function update_comment(game_id,game_name,user_id, comment,score,callback){
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: '1234',
        database: 'igc'
    });
    con.connect();
    con.query('update comments set comment = ? , star = ? where game_id = ? and user_id = ?', [comment, score, game_id,  user_id],function (error, result,fields) {
        if (error) throw error;
        con.end();
        callback(result);
    });
}

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'igc'
});

connection.connect();


module.exports={
    get_information,
    exist,
    information,
    get_id_information,
    get_comment_information,
    update_star,
    update_now,
    exist_comment,
    update_comment,
    connection
};