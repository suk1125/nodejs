const http = require ('http');
const fs = require('fs');
const ejs = require('ejs');

//서버를 생성하고 실행합니다.
http.createServer(function (request, response) {
    //ejsPage.ejs 파일을 읽습니다.
    fs.readFile('ejsPage.ejs','utf8',(error,data) => {
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.end(ejs.render(data, {
            name: 'jongchan',
            description: 'hello'
        }));

    });
}).listen(52273,() => {
    console.log('serever running ~');
});