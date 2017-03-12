var express = require('express');
var session = require('express-session');

//서버를 생성합니다.
var app = express();

//미들웨어를 설정합니다,
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60
    }
}));

//서버에서 세션이라서 use건드리나봄
//get은 클라이언트 get이라는 수동으로신호주고->서버 일때 서버에서 조치하는거고
//use는 클라이언트 접속하면 자동으로 서버안에서 작동하는 미들웨어 중간자역할 그런것같은거지
app.use( (request, response) => {
    //세션을 저장합니다.
    request.session.now = (new Date()).toUTCString();
    //응답합니다.
    response.send(request.session);
    
} );

//서버를 실행합니다.
app.listen(52273, () => {
    console.log('실행중입니다');
})