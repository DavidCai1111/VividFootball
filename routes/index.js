var express = require('express');
var router = express.Router();
var rankService = require('../service/rankService');
var scorerService = require('../service/scorerService');
var Eventproxy = require('eventproxy');
var cache = require('memory-cache');

/* 首页默认获取英超排行信息 */
router.get('/', function(req, res, next) {
    var rank = [];
    var scorers = [];
    var eventproxy = new Eventproxy();

    eventproxy.all('rankGet','scorerGet',function(rankGet,scorerGet){
        //对数据进行缓存，过期时间为5分钟
        cache.put('rankGet',rankGet,1000*60*5);
        cache.put('scorerGet',scorerGet,1000*60*5);
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
    if(cache.get('rankGet') === null){
        rank = rankService.getRank('England',eventproxy);
    }else{
        rank = cache.get('rankGet');
        eventproxy.emit('rankGet',rank);
    }

    if(cache.get('scorerGet') === null){
        scorers = scorerService.getScorer('England',eventproxy);
    }else{
        scorers = cache.get('scorerGet');
        eventproxy.emit('scorerGet',scorers);
    }

});

router.get('/rank/:league', function(req, res, next) {
    var rank = [];
    var scorers = [];
    var eventproxy = new Eventproxy();

    eventproxy.all('rankGet','scorerGet',function(rankGet,scorerGet){
        //对数据进行缓存，过期时间为5分钟
        cache.put('rankGet',rankGet,1000*60*5);
        cache.put('scorerGet',scorerGet,1000*60*5);
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
    if(cache.get('rankGet') === null){
        rank = rankService.getRank('England',eventproxy);
    }else{
        rank = cache.get('rankGet');
        eventproxy.emit('rankGet',rank);
    }

    if(cache.get('scorerGet') === null){
        scorers = scorerService.getScorer('England',eventproxy);
    }else{
        scorers = cache.get('scorerGet');
        eventproxy.emit('scorerGet',scorers);
    }

});

module.exports = router;
