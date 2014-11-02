//Thanks to:
//Joe Elsey, who helped me understand the app and router setup;
//Brent Parrish, for general moral support and code-checking;
//and Charles Renwick, for writing chai http tests that served as an example for my own tests.

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', router);
app.use(express.static(__dirname + '/public'));

router.all('/', function(req, res, next) {
  console.log("request made");
  next();
});

router.get('/', function (req, res) {
  var time = new Date();
  res.status(200);
  res.json(time.toLocaleTimeString());
});

router.get('/:name', function(req, res) {
  res.status(200);
  var sayHello = {"msg": ("Hello, " + req.params.name)};
  res.json(sayHello);
});

console.log('server started on port ' + port);
app.listen(port);


module.exports = app;
