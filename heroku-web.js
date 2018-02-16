var gzippo = require('gzippo');
var express = require('express');
var app = express();
var morgan = require('morgan');
var logger = morgan('combined');
var path = require('path');
var fs = require('fs');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
app.use(morgan('combined', {stream: accessLogStream}));
app.use(gzippo.staticGzip("" + __dirname + "/cryptoz-production"));
app.get('*', (req, res) => res.sendFile(path.resolve("" + __dirname + "/cryptoz-production", 'index.html')));
app.listen(process.env.PORT || 3000);