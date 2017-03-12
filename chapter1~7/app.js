//모듈추출
var rint = require('./rint.js');

//이벤트를 연결합니다
//rint.timer.on('tick',(code)=>console.log('이벤트를 실행합니다'));
//rint.tick.on('tick',(code)=>console.log('이벤트를 실행합니다'));
rint.on('tick',(code)=>console.log('이벤트를 실행합니다'));