require('dotenv/config');
require('express-async-errors');
var express = require('express');
const cors = require('cors');
var path = require('path');
var createError = require('http-errors');


const port = process.env.SERVER_PORT;
const { sequelize } = require("./app/models");


////////////////

// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

//var indexRouter = require('./routes/index');
var patientRouter = require('./app/routes/patientRoute');
var doctorRouter = require('./app/routes/doctorRoute');
var appointmentRouter = require('./app/routes/appointmentRoute');

var app = express();

// const database = require('./config/database');
// database(process.env.MONGOLAB_URI);

app.use(cors(), (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use('/', [patientRouter, doctorRouter, appointmentRouter]);
app.use('/patient', patientRouter);
app.use('/doctor', doctorRouter);
app.use('/appointment', appointmentRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err});
});

sequelize.authenticate()
  .then(() => {
    console.log('DataBase connected.');
  })
  .catch(err => {
    console.error('Unable to connect do DataBase: ', err);
  });

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});

module.exports = app;
