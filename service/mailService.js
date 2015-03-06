var account = require('../config/mailConfig.js').account;
var nodeMailer = require('nodemailer');
var util = require('util');

var mailService = {};

var transporter = nodeMailer.createTransport({
    host: 'smtp.163.com',
    secureConnection:true,
    auth:{
        user: account.username,
        pass: account.password
    }
});

mailService.sendHelloMail = function (emailAddressTo,rankGet,callback) {
    var tableToSent = '<p>以下是您选择的联赛的即时排行榜：</p><hr/><table id="rankTable" class="table table-striped table-bordered"><thead><td>排名</td><td>球队名</td><td>场次</td><td>胜</td><td>平</td><td>负</td><td>进球</td><td>失球</td><td>净胜球</td><td>场均进球</td><td>场均失球</td><td>场均净胜</td><td>场均积分</td><td>积分</td></thead>';
    for(var i = 0 ; i < rankGet.length ; i++){
        tableToSent += '<tr><td>' + rankGet[i][0] + '</td><td>' + rankGet[i][2] + '</td><td>' + rankGet[i][3] + '</td><td>' + rankGet[i][4] + '</td><td>' + rankGet[i][5] + '</td><td>' + rankGet[i][6] + '</td><td>' + rankGet[i][7] + '</td><td>' + rankGet[i][8] + '</td><td>' + rankGet[i][9] + '</td><td>' + rankGet[i][10] + '</td><td>' + rankGet[i][11] + '</td><td>' + rankGet[i][12] + '</td><td>' + rankGet[i][13] + '</td><td>' + rankGet[i][14] + '</td></tr>';
    }
    tableToSent += '</table>';

    var mailOptions = {
        from : account.username,
        to : emailAddressTo,
        subject : "感谢使用球赛爬爬" ,
        html : tableToSent
    };

    transporter.sendMail(mailOptions,function(err,info){
        if(err) {
            callback(err);
        }

        callback(null,info);
    });

};

module.exports = mailService;