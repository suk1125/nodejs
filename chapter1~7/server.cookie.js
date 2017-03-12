require('http').createServer((request, response) => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    // 쿠키를 입력
    response.writeHead(200, {'Content-Type': 'text/html', 'Set-Cookie':[
        'breakfast = toast;Expires = ' + date.toUTCString(), 
        'dinner = chicken'
        ]
});

//쿠키를 출력합니다.
response.end('<h1>' + request.headers.cookie + '</h1>');

}).listen(52273, ()=>{
    console.log('Server Running at htt~');
});


