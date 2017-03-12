var http = require('http');
var url = require('url');

//모듈을 사용합니다.
http.createServer((request,response) => {
   //요청 매개변수를 추출
   var query = url.parse(request.url, true).query;

   //GET 요청 매개변수 출력
   response.writeHead(200,{'Context-Type':'text/html'});
   response.end('<h1>' +JSON.stringify(query) + '</h1>');
}).listen(52273, () => {
    console.log('Server Running ~52273');
});