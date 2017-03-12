var express = require('express');

var app = express();

app.use((request, response) => {
    //user-agent 속성을 추출합니다.
    var agent = request.header('User-Agent');
    console.log(request.headers);
    console.log(agent);
    //응답합니다
    //상태 코드만 보낼 때는 sendStatus()메서드를 사용
    response.sendStatus(200);
})

app.listen(52273, () => {
    console.log('Server running~');
})