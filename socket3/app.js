//모듈을 추출합니다.
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

//웹 서버를 만듭니다.
var server = http.createServer(function (request, response) {
    //HTMLPage.html 파일을 읽습니다.
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
}).listen(52273, function () {
    console.log('server running ~');
});

//소켓 서버를 만듭니다.
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    console.log('server1');
    //message 이벤트
    socket.on('message', function(data) {
        //클라이언트의 message 이벤트를 발생시킵니다.
        io.sockets.emit('message', data);
            console.log('server2');
    });

});