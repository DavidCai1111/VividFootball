var indexRouter = require('./index');
var mailRouter = require('./mail');

module.exports = function(app){
    //赛事
    app.use('/', indexRouter);
    //邮件
    app.use('/mail',mailRouter);
};