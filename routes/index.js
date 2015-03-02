var express = require('express');
var router = express.Router();
var rankService = require('../service/rankService');
var scorerService = require('../service/scorerService');
var Eventproxy = require('eventproxy');

/* 首页默认获取英超排行信息 */
router.get('/', function(req, res, next) {
    var rank = [];
    var scorers = [];
    var eventproxy = new Eventproxy();

    eventproxy.all('rankGet','scorerGet',function(rankGet,scorerGet){
        console.log(scorerGet);
        //等待获取到排名信息
        res.render('index', {
            title: '球赛爬爬',
            rank:rankGet,
            scorer:scorerGet,
            updateAt:new Date(),
            rankJsoned: JSON.stringify(rankGet),
            scorersJsoned: JSON.stringify(scorerGet)
        });
    });

    //获取英超排名
    var rank = rankService.getRank('England',eventproxy);
    var scorers = scorerService.getScorer('England',eventproxy);

});

router.get('/rank/:league', function(req, res, next) {
    var rank = [];
    var scorers = [];
    var eventproxy = new Eventproxy();

    eventproxy.all('rankGet','scorerGet',function(rankGet,scorerGet){
        console.log(scorerGet);
        //等待获取到排名信息
        res.render('index', {
            title: '球赛爬爬',
            rank:rankGet,
            scorer:scorerGet,
            updateAt:new Date(),
            rankJsoned: JSON.stringify(rankGet),
            scorersJsoned: JSON.stringify(scorerGet)
        });
    });

    //获取英超排名
    var rank = rankService.getRank(req.params.league,eventproxy);
    var scorers = scorerService.getScorer(req.params.league,eventproxy);

});

module.exports = router;
