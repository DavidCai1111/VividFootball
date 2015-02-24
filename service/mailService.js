var account = require('../config/mailConfig.js').account;
var nodeMailer = require('nodemailer');

var mailService = {};

var transporter = nodeMailer.createTransport({
    host: 'smtp.163.com',
    secureConnection:true,
    auth:{
        user: account.username,
        pass: account.password
    }
});

mailService.sendHelloMail = function (emailAddressTo) {
    var mailOptions = {
        from : account.username,
        to : emailAddressTo,
        subject : "感谢订阅球赛爬爬" ,
        text : "感谢订阅球赛爬爬，球赛爬爬会在周日定时发来五大联赛信息"
    }

    transporter.sendMail(mailOptions,function(err,info){
        if(err) console.log(err);

        console.log("Mail sent: " + info.response);
    });

}

module.exports = mailService;