var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const config = require("config");

var indexRouter = require('./routes/index');
const userRouter = require("./routes/api/v1/users");
const eventRouter = require("./routes/api/v1/event");
const stepRouter = require("./routes/api/v1/steps");
const passport = require("./passport/passport");

const mongoose = require('mongoose');
mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.dbconn || config.get("Database.conn"), {useNewUrlParser: true, useUnifiedTopology: true});

var app = express();
const cors = require("cors");
// cors setup
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/users", userRouter);
app.use('/events', passport.authenticate('jwt', { session: false }), eventRouter);
app.use("/steps", stepRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//wegdoen bij deployment heroku!!!
// app.listen(3000, function(){
//   console.log("start op 3000");
// });//

module.exports = app;
