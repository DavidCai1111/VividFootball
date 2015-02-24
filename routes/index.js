var express = require('express');
var router = express.Router();
var rankService = require('../service/rankService');
var Eventproxy = require('eventproxy');

/* 首页默认获取英超排行信息 */
router.get('/', function(req, res, next) {
    var rank = [];
    var eventproxy = new Eventproxy();

    eventproxy.all('rankGet',function(rankGet){
        console.log("rank: " + rankGet);
        //等待获取到排名信息
        res.render('index', {
            title: '球赛爬爬',
            rank:rankGet,
            updateAt:new Date()
        });
    });

    //获取英超排名
    var rank = rankService.getRank('England',eventproxy);

});

router.get('/rank/:league', function(req, res, next) {
    var rank = [];
    var eventproxy = new Eventproxy();

    eventproxy.all('rankGet',function(rankGet){
        //等待获取到排名信息
        res.render('index', {
            title: '球赛爬爬',
            rank:rankGet,
            updateAt:new Date()
        });
    });

    //获取英超排名
    var rank = rankService.getRank(req.params.league,eventproxy);

});

module.exports = router;
