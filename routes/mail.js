var express = require('express');
var router = express.Router();
var mailService = require('../service/mailService');
var rankService = require('../service/rankService');
var Eventproxy = require('eventproxy');
var util = require('util');

router.post('/subscribe/rank/:league',function(req,res,next){

    var reqBody = req.body;

    if(!isEmail(reqBody.email)){
        res.send({
            result:false
        });
    }

    var eventproxy = new Eventproxy();

    eventproxy.all('rankGet',function(rankGet){

        mailService.sendHelloMail(reqBody.email,rankGet,function(err,info){
            if(err){
                res.send({
                    result:false
                });
            }
            res.send({
                result:true,
                info:info
            });
        });
    });

    var rank = rankService.getRank(req.params.league,eventproxy);
});

function isEmail(str){
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    return reg.test(str);
}

module.exports = router;