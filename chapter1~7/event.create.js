//EventEmitter 객체를 생성합니다.
//var custom = new process.EventEmitter();
const EventEmitter = require('events');
const custom = new EventEmitter();
//이벤트를 연결합니다.
custom.on('tick', (code) => console.log('이벤트를 실행합니다!!'));

//이벤트를 강제로 발생시킵니다.
custom.emit('tick');

