var express = require('express')
var app = express()

app.use('/', express.static('./'));

app.listen(3000, function() {
  console.log("Server started on 3000");
})
