var fs = require('fs');

var data = 'Hello World .. !';

fs.writeFile('TextFileOtherWrite.txt',data,'utf8', function (error) {
    console.log('Write File asynnc complete');
});

fs.writeFileSync('TextFileOtherWrite.txt',data, 'utf8');
console.log('write file sync complete');