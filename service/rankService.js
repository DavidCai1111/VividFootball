var request = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');

var rankService = {};

rankService.getRank = function (leagueName,eventproxy){
    var rank = [];

    request.get('http://soccer.hupu.com/table/' + leagueName + '.html')
        .end(function(err,sres){
            if(err) return err;

            //获取页面
            var $ =cheerio.load(sres.text);

            //获取排名列表
            $('#main_table tbody tr').each(function(index,element){
                var team = {};

                //遍历队伍排名详情
                $('td',element).each(function(index,element){
                    if(index !== 1){
                        team[index] = $(element).text();
                    }
                });

                rank.push(team);
            });
            eventproxy.emit('rankGet',rank);
        }
    );


};

module.exports = rankService;

