const express = require('express');

//서버를 생성
const app = express();

//request 이벤트 리스너를 설정합니다.
app.use((request,response) => {
    var output = [];
    for(var i = 0; i <3; i++) {
        output.push({
            count: i,
            name: 'name - ' + i
        });
    }
    response.status(404).send(output);
});

//서버 실행
app.listen(52273, () =>{
    console.log("Server Running ~");
});
