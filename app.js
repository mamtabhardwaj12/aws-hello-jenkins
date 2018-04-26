var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Cateina");
});

app.listen(5003);
