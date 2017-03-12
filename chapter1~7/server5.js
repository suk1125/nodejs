var fs =require('fs');
var http = require('http');

//52273 번 포트에 서버를 생성하고 실행합니다.
http.createServer((request,response)=>{
//이미지 파일을 읽습니다.
fs.readFile('sample.jpg', (error, data) => {
    response.writeHead(200, {'Context-Type': 'image/jpeg'});
    response.end(data);
    console.log('enter');
    });
}).listen(52273, () => {
    console.log('Server running 52273');
});

//52274 번 포트에 서버를 생성하고 실행합니다.
http.createServer(function(request,response){
    fs.readFile('twice.mp3', function (error, data) {
    response.writeHead(200, {'Context-Type': 'audio/mp3'});
    response.end(data);
        console.log('enter2');
    });

}).listen(52274, function() {
    console.log('Server running 52274');
});