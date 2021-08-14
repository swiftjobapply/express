var express = require('express')
var app = express()
var port = 8000
app.listen(port)
app.get('/',(req,res) => {
res.send('hello')
})
