var app = require('../../app');
var request = require('supertest')(app);
var should = require('should');

describe('test/router/mail.test.js',function(){
	var mailToSent = "376462191@qq.com";

	this.timeout(100000);

	it('请求英超邮件',function(done){
		request
			.post('/mail/subscribe/rank/England')
			.send({email: mailToSent})
			.expect(200)
			.end(function(err,res){
				res.text.should.containEql('"result":true');
				done(err);
			});
	});
});