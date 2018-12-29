var express = require('express');
var app = express();
var fs = require("fs");

app.listen(8085, function () {
   console.log("Example app listening at 8085")
})

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({ name: requestedCatName });
});