const express = require('express');
const mongoose = require('mongoose');
const configExpress = require('./config/express');
const api = require('./api');

const dbUrl = 'mongodb://iteso:nodeWorkshopIteso2017@ds019856.mlab.com:19856/heroku_l9f2phct';

const app = express();
const port = 3000;

mongoose.connect(dbUrl, { useMongoClient: true }, (err) => {
  if (err) {
    console.error('ERROR => connecting to Database.', err);
  } else {
    console.log(`Connected to Database => ${dbUrl}`);
  }
});

configExpress(app);
app.use('/', api);

const server = app.listen(port, () => console.log('Server has started at port ', port));