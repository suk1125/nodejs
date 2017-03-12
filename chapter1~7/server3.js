require('http').createServer((request, response) => {
    //응답합니다.
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello Web sever with node</h1>');
}).listen(52273, ()=>{
    console.log('Server Running at htt~');
});
