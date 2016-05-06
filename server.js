'use strict'

const express       = require('express');
const logger        = require('morgan');
const moment        = require('moment');
const path          = require('path');
const bodyParser    = require('body-parser');
const app           = express();

if(!process.env.NODE_ENV) {
  require('dotenv').config();
};

if(process.env.NODE_ENV === 'dev') {
  app.use(logger('dev'));
} else {
  app.use(logger('common'));
};

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

const port = process.env.PORT || 3300;
const time = moment().format('MMM Do YYYY, h:mm:ss a');

app.listen(port, ()=> console.log(`Server initiated on port ${port}, ${time}`));
