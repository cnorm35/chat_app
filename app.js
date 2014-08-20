var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
	res.sendfile('index.html');
});

io.on('connection', function(socket){
	console.log('new user connected!');
});

io.on('chat message', function(socket){
	console.log('message: ' + msg);
});


http.listen(4000, function(){
	console.log('magic happens on port 4000')
})