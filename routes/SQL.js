var mysql = require('mysql');
//数据库配置
var config = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '1234',
    database: 'igc'
};
//初始化页面
function information(callback)
{
    let con = mysql.createConnection(config);
    con.connect();
    con.query('SELECT * from game order by star desc', function (error, results, fields) {
        if (error) throw error;
        con.end();
        callback(results);
    });
}
//更新评论
function update_comment(gamename,callback){
    let con = mysql.createConnection(config);
    let comments=Array(100),gameInfo;
    con.connect();
    con.query('select * from comments where GAME_NAME= ?',[gamename],function (err, results) {
        if (err) throw err;
        else {
            for(let i=0,j=results.length-1; i<results.length&&j>=0; i++,j--){
                var d = new Date(results[j].CREATE_TIME);
                var date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                comments[i] = {username:results[j].USER_ID,time:date,rate:results[j].STAR,content:results[j].COMMENT};
            }
        }
        con.query('select * from game where NAME= ?',[gamename],function (err, results) {
            if (err) throw err;
            else {
                gameInfo = {name:results[0].NAME,type:results[0].TYPE,intro:results[0].INTRODUCTION,img:results[0].image,rating:results[0].STAR};
            }
            callback(comments,gameInfo);
        })
    })
}
//添加新的评论
function add_comments(gamename,star,comment,username, callback){
    let con = mysql.createConnection(config);
    con.connect();
    let i=0;
    con.query('select USER_ID from comments where GAME_NAME= ?',[gamename],function (err, results) {
        if (err) throw err;
        else for(;i<results.length;i++){
            if(results[i].USER_ID == username){
                //这里将
                con.query('update comments set COMMENT= ?,STAR= ? where USER_ID= ?',[comment, star, username],function (err, results) {
                    if (err) throw err;
                    else{
                        update_now(gamename, function (r) {
                            return true;
                        });
                    }
                });
                break;
            }
        }
        if(i>=results.length){
            con.query('select GAME_ID from game where NAME="'+gamename+'"',null,function (err, results) {
                let gameid = results[0].GAME_ID;
                if (err) throw err;
                else con.query('insert into comments values("'+gameid+'","'+gamename+'","'+username+'","'+comment+'","'+star+'",'+'NOW())',null,function (err, results) {
                    if (err) throw err;
                    else{
                        update_now(gamename, function (r) {
                            return true;
                        });
                    }
                });
            });
        }
        callback(results);
    })

}
//获取新的评分值
function update_now(game_name,callback){
    let con = mysql.createConnection(config);
    con.connect();
    con.query('select AVG(STAR) as score_new from comments where game_name = ?',[game_name],function (error, result,fields) {
        if (error) throw error;
        con.end();
        //下面对将评分转换为小数点后两位的数据(toFixed)，如果需要更改精度请修改这里
        set_new_star(game_name, result[0].score_new.toFixed(0),function (ret) {
            callback(result);
        });
    });
}
//更新评分
function set_new_star(game_name,score,callback){
    let con = mysql.createConnection(config);
    con.connect();
    con.query('update game set star = ? where name = ?',[score, game_name],function (error, result,fields) {
        if (error) throw error;
        con.end();
        callback(result);
    });
}
//查询用户是否存在
function user_exist(user_name,callback){
    let con = mysql.createConnection(config);
    con.connect();
    con.query("select password from user where USERNAME = ?",[user_name], function (error, results, fields) {
        if (error) throw error;
        con.end();
        callback(results);
    });
}
//
//查询用户数量
function get_count(callback){
    let con = mysql.createConnection(config);
    con.connect();
    con.query("select count(user_id) as num  from user", function (error, results) {
        if (error) throw error;
        con.end();
        callback(results);
    });
}
//创建新用户
function create_new_user(id, name, email, password, callback){
    let con = mysql.createConnection(config);
    con.connect();
    con.query("insert into user values(?,?,?,?)",[id+1,name,email,password], function (error, results) {
        if (error) throw error;
        con.end();
        callback(results);
    });
}
//验证游戏名是否存在
function exist(name, callback)
{
    let con = mysql.createConnection(config);
    con.connect();
    con.query('select * from game where name = ?',[name], function (error, result,fields) {
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
//验证游戏名是否存在
function my_user_exist(name, callback)
{
    let con = mysql.createConnection(config);
    con.connect();
    con.query('select * from user where username = ?',[name], function (error, result,fields) {
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
module.exports= {
    information,
    update_comment,
    add_comments,
    user_exist,
    get_count,
    create_new_user,
    exist,
    my_user_exist
};