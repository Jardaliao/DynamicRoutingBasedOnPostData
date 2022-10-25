const express = require('express')

const app = new express()

app.post("/add", function(req, res, next) {
    console.log('9091 triggered', req.path)
    res.send("server2 9091 response")
})

app.listen(9091, function() {
    console.log('9091 started')
})