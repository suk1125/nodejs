const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((request,response) => {

    var pathname = url.parse(request.url).pathname;

    //페이지를 구분합니다.
    if (pathname == '/') {
        //Index.html 파일을 읽습니다.
        fs.readFile('Index.html', (error, data) => {
            //응답합니다.
            response.writeHead(200,{ 'Context-Type' : 'text/html'});
            response.end(data);
        });
    } else if (pathname == '/OtherPage') {
           //OtherPage.html 파일을 읽습니다.
        fs.readFile('OtherPage.html', (error, data) => {
            //응답합니다.
            response.writeHead(200,{ 'Context-Type' : 'text/html'});
            response.end(data);
        });           
    }
}).listen(52273,() => {
    console.log('server running~')
});