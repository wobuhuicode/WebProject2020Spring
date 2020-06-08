var sql = require("../routes/SQL");
var expect = require("chai").expect;

//测试information的函数
describe('获取初始化信息函数测试', function() {
    it('应该得到第一个星际争霸的名字', function() {
        sql.information(function (re) {
            expect(re[0].name).to.be.equal("星际争霸");
        });
    });
});


//测试get_information的函数
describe('获取某个游戏信息函数测试', function() {
    it('应该得到只狼的评分', function() {
        sql.get_information("只狼",function (re) {
            expect(re[0].STAR).to.be.equal("5");
        });
    });
});


//测试get_comment_information的函数
describe('获取某个游戏评论信息的函数测试', function() {
    it('应该得到彩虹六号的评论', function() {
        sql.get_comment_information("彩虹六号",function (re) {
            expect(re[0].comment).to.be.equal("菜6很好玩！");
        });
    });
});
