var app = require('../../app');
var request = require('supertest')(app);

describe('test/router/index.test.js',function(){
	this.timeout(100000);
    it('请求"/",应取得200状态码',function(done){
        request.get('/')
            .expect(200)
            .end(function(err){
                if (err) return done(err);
                done()
            });
    });
    it('请求英超,应取得200状态码',function(done){
        request.get('/rank/England')
            .expect(200)
            .end(function(err){
                if (err) return done(err);
                done()
            });
    });
    it('请求意甲,应取得200状态码',function(done){
        request.get('/rank/Italy')
            .expect(200)
            .end(function(err){
                if (err) return done(err);
                done()
            });
    });
    it('请求德甲,应取得200状态码',function(done){
        request.get('/rank/Germany')
            .expect(200)
            .end(function(err){
                if (err) return done(err);
                done()
            });
    });
    it('请求西甲,应取得200状态码',function(done){
        request.get('/rank/Spain')
            .expect(200)
            .end(function(err){
                if (err) return done(err);
                done()
            });
    });
    it('请求法甲,应取得200状态码',function(done){
        request.get('/rank/France')
            .expect(200)
            .end(function(err){
                if (err) return done(err);
                done()
            });
    });
});
