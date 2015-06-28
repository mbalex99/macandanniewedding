var express = require('express');
var app = express();
var ejs = require('ejs');

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use('/assets', express.static('assets'));


app.get('/', function (req, res) {
  res.render('index');
});


var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Wesbite listening at http://%s:%s', host, port);
});