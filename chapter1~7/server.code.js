const http = require('http');

//웹 서버를 생성 및 실행합니다.
http.createServer((request,response) =>{
    response.writeHead(404);
    response.end();
}).listen(52273,() => {
    console.log('server running ~');
});