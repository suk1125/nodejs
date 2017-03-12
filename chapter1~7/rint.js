//EventEmitter 객체를 생성합니다
//exports.timer = new process.EventEmitter();

const EventEmitter = require('events');
const customEmitter = new EventEmitter();

//이벤트를 강제로 발생시킵니다.
//setInterval(()=> exports.timer.emit('tick'),1000);
setInterval(()=> customEmitter.emit('tick'),1000);

//exports.tick=customEmitter;
module.exports=customEmitter;