var mysql = require('mysql');

//데이터베이스를 연결합니다.
var client = mysql.createConnection({
    user: 'root',
    password:'whdcks1125Q'
});

/*
var client = mysql.createConnection({
    user: 'root',
    password:'whdcks1125Q'
    database:'Company'
});
*/

//데이터베이스 쿼리를 사용합니다.
client.query('USE Company');
client.query('SELECT * FROM products', function(error,result,fields) {
    if(error) {
        console.log('쿼리문장에 오류가 있습니다');
    } else {
        console.log(result);
    }
});
/*
client.query('INSERT INTO products (name, modelnumber, series) VALUES(?,?,?)', 
['sd', 'sdqwee', 'qqrwe'], 
(error,results,fields) => {
        console.log('asdsad');
        console.log(error);       
 });

    */
    