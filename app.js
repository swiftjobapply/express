var express = require('express')
var app = express()
var port = process.env.PORT || 2000
app.listen(port)
app.get('/',(req,res) => {
res.send('hello')
})
