var fs = require('fs');
var http = require ('http');

// 웹서버를 생성하고 실행합니다.
http.createServer((request, response)=>{
    //HTML 파일을 읽습니다.
    fs.readFile('HTMLPage.html', (error, data)=>{
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
    });

}).listen(52273, ()=> {
    console.log('Server Running at http:~');
});