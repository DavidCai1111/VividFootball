var express = require('express');
var router = express.Router();

router.post('/mail/subscribe',function(req,res,next){
    console.log("get mail address: " + req.params.email);
    res.end("get mail address: " + req.params.email);
});
