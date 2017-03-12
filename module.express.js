const express = require('express');

//서버를 생성
const app = express();

//request 이벤트 리스너를 설정합니다.
app.use((request,response) => {
    response.writeHead(200, { 'Content-Type':'text/html'});
    response.end('<h1>Hello expresss</h1>');
});

//서버 실행
app.listen(52273, () =>{
    console.log("Server Running ~");
});
