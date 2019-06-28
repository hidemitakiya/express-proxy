// include dependencies
var express = require('express');
var proxy = require('http-proxy-middleware');
var cors = require('cors');

// proxy middleware options
var options = {
  target: 'https://homolog-api.voud.com.br:8084', // target host
  secure: false
};

// mount `exampleProxy` in web server
var app = express();
app.use(cors());
app.use('/voud', proxy(options));
  
app.listen(3000);