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
        //等待获取到排名信息
        res.render('index', {
            title: '重生的积分榜射手榜！',
            rank:rankGet,
            scorer:scorerGet,
            updateAt:new Date(),
            rankJsoned: JSON.stringify(rankGet),
            scorersJsoned: JSON.stringify(scorerGet)
        });
    });

    eventproxy.all('rankGet',function(){
        res.socketio.on('connection',function(socket){
            socket.emit('getInfo');
        });
    });

    eventproxy.all('scorerGet',function(){
        res.socketio.on('connection',function(socket){
            socket.emit('getInfo');
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
        //等待获取到排名信息
        res.render('index', {
            title: '重生的积分榜射手榜！',
            rank:rankGet,
            scorer:scorerGet,
            updateAt:new Date(),
            rankJsoned: JSON.stringify(rankGet),
            scorersJsoned: JSON.stringify(scorerGet)
        });
    });

    eventproxy.all('rankGet',function(){
        res.socketio.on('connection',function(socket){
            socket.emit('getInfo');
        });
    });

    eventproxy.all('scorerGet',function() {
        res.socketio.on('connection', function (socket) {
            socket.emit('getInfo');
        });
    });

    //获取英超排名
    var rank = rankService.getRank(req.params.league,eventproxy);
    var scorers = scorerService.getScorer(req.params.league,eventproxy);

});

module.exports = router;
