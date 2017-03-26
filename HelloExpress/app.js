//외부 모듈을 추출
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//사용자 정의 모듈 추출
var index = require('./routes/index');
var users = require('./routes/users');
//서버 생성
var app = express();

// view engine setup
//서버 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//미들웨어 설정
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//라우터 미들웨어 설정
app.use('/', index);
app.use('/users', users);

//GET -/product
app.get('/product',function (request, response) {
  response.render('product', {
    title: 'ProductPage'
  });
});
//GET -/product/insert
app.get('/product/insert',function (request, response) {
  response.render('product', {
    title: 'InsertPage'
  });
});
//GET -/product/edit
app.get('/product/edit',function (request, response) {
  response.render('product', {
    title: 'EditPage'
  });
});



// catch 404 and forward to error handler
//404 에러 메시지 출력
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
//에러핸들러
//production과 developmet 환경에서 오류를 처리
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



//모듈화
module.exports = app;
