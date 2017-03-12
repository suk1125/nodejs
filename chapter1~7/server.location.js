require('http').createServer((request, response) => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    // 쿠키를 입력
    response.writeHead(302,{'Location' : 'http://www.hanbit.co.kr'});
    response.end();

}).listen(52273, ()=>{
    console.log('Server Running at htt~');
});


