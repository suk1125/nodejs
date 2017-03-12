var http = require('http');

//server 객체를 생성합니다.
var server = http.createServer();

//server 객체에 이벤트를 연결합니다.
server.on('request', (code)=>{
    console.log('request on');
});

server.on('connection', (code)=>{
    console.log('connection on');
});

server.on('close', (code)=>{
    console.log('close on');
});

server.listen(52273);