var express = require('express');
var app = express();
var logger = require('morgan');

// router 설정
var indexRouter = require('./routes/index');
var introductionRouter = require('./routes/introduction');
var archievingRouter = require('./routes/archieving');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로 설정
app.set('views', __dirname + '/views');

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// 기본 path를 /public으로 설정(css, javascript 등의 파일 사용을 위해)
app.use(express.static(__dirname + '/public'));

// Url
app.use('/', indexRouter);
app.use('/', introductionRouter);
app.use('/', archievingRouter);


module.exports = app;

//작동 확인용
app.listen(3000, function () {
	console.log('connected');
});