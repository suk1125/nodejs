var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');
const uuidV4  = require('uuid/v4'); //https://github.com/broofa/node-uuid 더참조하자

//서버를 생성합니다.
var app= express();

//미들웨어를 성정합니다.
app.use(multipart({ uploadDir: __dirname + '/multipart'}));

//라우터를 설정합니다.
app.get('/', (request, response) => {
    fs.readFile('HTMLPage.html', (error, data) => {
        response.send(data.toString());
    }); 
        console.log('반응한다~');
});

app.post('/', (request, response) => {

    var comment = request.body.comment;
    var imageFile = request.files.image;

    if(imageFile) {
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        //이미지 파일 확인
        if (type.indexOf('image') != -1) {
            //이미지파일의 경우: 파일 이름을 변경합니다.       
            var outPutPath = __dirname + '/multipart/'+ uuidV4()  + '_' + name;
            fs.rename(path, outPutPath, (error) => {
                response.redirect('/');  //여기에 달려있네
            });
        } else {
            //이미지 파일이 아닌 경우: 파일을 제거합니다.
            fs.unlink(path, (error) => {
                response.sendStatus(400);
            });
        } 
    } else {
        //파일이 없을 경우
        response.sendStatus(404);
    }

    console.log(request.body);
    console.log(request.files);

   // response.redirect('/');
});

//서버를 실행합니다
app.listen(52273, () => {
    console.log('server running~');
});