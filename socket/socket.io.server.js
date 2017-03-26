var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

//웹서버를 생성합니다.
var server = http.createServer(function (request, response) {
    //HTMLPage.html 파일을 읽습니다.
    fs.readFile('HTMLPage.html', function (error,data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}).listen(52273, function () {
    console.log('Server ruunning~');
});
// 소켓 서버를 생성 및 실행합니다.
var id =0;
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    //rint 이벤트
    socket.on('rint', function (data) {
        //클라이언트가 전송한 데이터를 출력합니다.
        console.log('Client Send Data:', data);

        //클라이언트에 smart 이벤트를 발생시킵니다. public  통신
       // socket.emit('smart',data);
        //broadcast통신
       // socket.broadcast.emit('smart',data);
        //id설정
        id= socket.id;
        //private 통신
        io.sockets.to(id).emit('smart',data);
    });

});