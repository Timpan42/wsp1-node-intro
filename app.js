const express = require('express')
const nunjucks = require('nunjucks');
const path = require('path')
const indexRouter = require('./routes/index');

const app = express()
const port = 6969

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.use(express.static('public'))
app.use('/', indexRouter);

