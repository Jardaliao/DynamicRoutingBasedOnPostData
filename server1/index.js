const express = require('express')

const app = new express()

app.post("/add", function(req, res, next) {
    console.log('9090 triggered', req.path)
    res.send("server1 9090 response")
})

app.listen(9090, function() {
    console.log('9090 started')
})