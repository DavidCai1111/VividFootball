var express = require('express');
var router = express.Router();
var mailService = require('../service/mailService');

router.post('/subscribe',function(req,res,next){
    var reqBody = req.body;
    console.log("get mail address: " + reqBody.email);
    mailService.sendHelloMail(reqBody.email);
    res.end("sent mail: " + reqBody.email);
});

module.exports = router;