var http = require('http');
var fs = require('fs');

http.createServer((request, response) => {
    if (request.method == 'GET') {
        fs.readFile('HTMLPage.2.html', (error,data) => {
            response.writeHead(200,{'Content-Type' : 'text/html'});
            response.end(data);
        });
        console.log('GET 요청입니다');
    } else if (request.method == 'POST') {
        request.on('data', (data) => {
            response.writeHead(200,{'Content-Type' : 'text/html'});
            response.end('<h1>' + data + '</h1>' );
       });
  
    }

}).listen(52273, () => {
    console.log("running~");
});