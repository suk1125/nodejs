var fs = require('fs');

//서버를 생성합니다
var server = require('http').createServer();
var io = require('socket.io').listen(server);
 var roomName = null;

//서버를 실행합니다.
server.listen(52273, function() {
    console.log ('Server run~~');
});

//웹 서버 이벤트를 연결합니다.
server.on ('request', function (request, response) {
    //htmlpage.html 파일을읽습니다
    fs.readFile('HTMLPage.html', function(error,data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
});
//소켓 서버 이벤트를 연결합니다.
io.sockets.on('connection',function(socket) {
    // 방 이름을 저장할 변수
   
 console.log('server1');
    //join 이벤트
    socket.on('join', function (data) {
        roomName = data;
        socket.join(data);
         console.log('server2');
     
    });
     console.log("roomname" + roomName);

    //message 이벤트
    socket.on('message', function (data) {
        console.log(roomName);
        io.sockets.in(roomName).emit('message', 'test');
        //io.sockets.emit('message', 'test');
         console.log('server3');

    });
});