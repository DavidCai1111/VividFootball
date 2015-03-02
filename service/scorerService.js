var request = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');

var scorerService = {};

scorerService.getScorer = function (leagueName,eventproxy){
    var scorers = [];

    request.get('http://soccer.hupu.com/scorers/' +  scorerService.convertLeagueNameToNumber(leagueName))
        .end(function(err,sres){
            if(err) return err;

            //获取页面
            var $ =cheerio.load(sres.text);

            //获取排名列表
            $('#main_table tr').each(function(index,element){
                var scorer = {};

                //遍历队伍排名详情
                $('td',element).each(function(index,element){
                    if(index !== 2){
                        scorer[index] = $(element).text();
                    }
                });

                scorers.push(scorer);
            });
            eventproxy.emit('scorerGet',scorers);
        }
    );
};

scorerService.convertLeagueNameToNumber = function(LeagueName){
    if(LeagueName === "England"){
        return 2;
    }else if(LeagueName === "Spain"){
        return 3;
    }else if(LeagueName === "Italy"){
        return 4;
    }else if(LeagueName === "Germany"){
        return 5;
    }else if(LeagueName === "France"){
        return 6;
    }else{
        return 0;
    }
};

module.exports = scorerService;
