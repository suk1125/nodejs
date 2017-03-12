const http = require ('http');
const fs = require ('fs');
const pug = require ('pug');

http.createServer((request, response) =>{
    //PugPage.pug 파일을 읽습니다.
    fs.readFile('PugPage.pug', 'utf8',(error, data)=> {
        //pug 모듈을 사용합니다.
        const fn = pug.compile(data);
        //출력합니다
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fn());
    });
}).listen(52273, () => {
    console.log('running');
})
