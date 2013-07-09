var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
var buf=new Buffer(256); 
buf=fs.readFileSync("index.html","utf-8");

});

console.log(buf.toString('ascii', 0, buf.length));
