var express = require('express');
var cookieParser = require('cookie-parser');
//서버 생성
var app =express();
//미들웨어 설정
app.use(cookieParser());

//라우터를 설정합니다.
app.get('/getCookie', (request,response) => {
    response.send(request.cookies);
});

app.get('/setCookie', (request,response) =>{
    //쿠키를 생성합니다.
    response.cookie('string', 'cookie', {
        maxAge: 60,
        secure: true
    });
    response.cookie('json', {
        name: 'cookie',
        property: 'delicious'
    });    

    //응답합니다
    response.redirect('/getCookie');
});

//서버를 실행합니다,.
app.listen(52274, () => {
    console.log('Server running~');
})
