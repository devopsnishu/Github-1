var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello Team" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hey how r you" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
