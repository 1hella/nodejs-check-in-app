var express = require('express');
var path = require('path');
var fs = require('fs');

var index = require('./routes/index');
var login = require('./routes/login');
var checkIn = require('./routes/check-in');
var history = require('./routes/history');
var admin = require('./routes/admin');
var studentCheckIn = require('./routes/student-check-in');
var success = require('./routes/success');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.use('/', index, login, checkIn, history, admin, studentCheckIn, success);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;