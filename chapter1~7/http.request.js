var http = require('http');

//모듈을 사용합니다.
http.createServer((request,response) => {
    if (request.method == 'GET') {
        console.log('GET 요청입니다');
    } else if (request.method == 'POST') {
        console.log('POST 요청입니다.');
    }
}).listen(52273, () => {
    console.log('Server Running ~52273');
});