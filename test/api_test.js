var chai = require('chai');
var chaihttp = require('chai-http');
var app = require('../lib/server.js')

var expect = chai.expect;

chai.use(chaihttp);

describe('Simple JSON API', function() {
  it('should send the local time', function() {
    var time = new Date();
    var theTime = time.toLocaleTimeString();
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.be.eql(theTime)
        })
  });

  it('should greet someone', function(){
    chai.request('http://localhost:3000')
      .get('/Grace')
      .end(function (err, res) {
        chai.expect(err).to.be.null;
        chai.expect(res.body.msg).eql('Hello, Grace')
        });
  });
});
