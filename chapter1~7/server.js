var http = require('http');

//웹서버 생성
var server = http.createServer();

//웹서버 실행
server.listen(52273, ()=> {
    console.log('server running at http://127.0.0.1:52273');
});

//10초 후 함수를  실행
var test =() => {
    //서버를 종료합니다ㅣ.
    server.close();
};
setTimeout(test,10000);