//변수를 선언합니다.
var onUncaughtException = function (error) {
    console.log('예외가 발생했군 이번만 봐줌');

    //이벤트를 제거합니다.
    process.removeListener('uncaughtException',onUncaughtException);
};

//process 객체에 onUncaughtException 이벤트를 연결합니다.
process.on('uncaughtException', onUncaughtException);

//2초 간격으로 예외를 발생시킵니다.
var test = function() {
    setTimeout(test, 2000);
    error.error.error();
};
setTimeout(test,2000);
