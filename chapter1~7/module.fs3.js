var fs = require('fs');

try {
    var data = fs.readFileSync('textfile.txt','utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

try {
    fs.writeFileSync('textfile.txt','Hello World ..!', 'utf8');
    console.log('File Write Complete');
} catch (e) {
    console.log(e);
}