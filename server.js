var express = require('express');
var app = express();

var today = new Date();
var todayDate = today.getDate();
var todayString = 'Today is the ' + todayDate + 'th.';

// app.get('/', function(req, res){
//   res.send(todayString);
// });

app.post('/weather', function(req, res){
  var newCity = req.body.city;
  var newState = req.body.state;
})

app.use(express.static('public'));

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port ' + port + '...');
});
