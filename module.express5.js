var express = require ('express');

var app = express();

app.use((request, response, next) => {
    var name =request.query.name;
    var region = request.query.region;
    //응답합니다
    response.send('<h1>' + name + '-' + region + '</h1>');
});

app.listen(52273, ()=>{
    console.log('running~');
});