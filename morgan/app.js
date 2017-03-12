var express = require ('express');
var morgan = require ('morgan');

var app = express();

//app.use(morgan('short'));
app.use(morgan(':method + :date'));
app.use((request, response) => {
    response.send('<h1>express Basic</h1>');
});

// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('server running');
})