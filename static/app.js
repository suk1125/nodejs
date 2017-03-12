//모듈을 추출합니다.
var express =require('express');

//서버를 생성합니다.
var app = express();

//미들웨어를 설정합니다.
app.use(express.static(__dirname + '/public'));
app.use((request,response) => {
    // 응답합니다.
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<img src="/2747256_1_130.jpg" width ="100%" />');
});

//서버를 실행합니다.
app.listen(52273, function () {
    console.log('server running');
});