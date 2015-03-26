var app = require('../../app');
var request = require('supertest')(app);

describe('test/router/index.test.js',function(){
    it('请求"/",应取得200状态码',function(done){
        request.get('/')
            .expect(200)
            .end(function(err){
                if (err) return done(err);
                done()
            });
    });
});
