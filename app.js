const express = require('express')
const nunjucks = require('nunjucks');
const path = require('path')
const indexRouter = require('./routes/index');
const createError = require('http-errors')

const app = express()
const port = 6969


nunjucks.configure('views', {
  autoescape: true,
  express: app,
});



app.use(express.static('public'))
app.use('/', indexRouter);
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
  res.render('error.njk');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})