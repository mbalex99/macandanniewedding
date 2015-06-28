var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use('/assets', express.static('assets'));


app.get('/', function (req, res) {
  res.render('index');
});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Wesbite listening at http://%s:%s', host, port);
});