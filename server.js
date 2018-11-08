const express = require('express');
const app = express();
const port = 3000;

var path = require('path');

app.listen(port, () => console.log(`Example app listening on port ${port}`));

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, "../Hot-Restaurant/views/tables.html"))
});
app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, "../Hot-Restaurant/views/reservations.html"))
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../Hot-Restaurant/views/home.html"))
});