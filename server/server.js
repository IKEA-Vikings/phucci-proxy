const express = require('express');
const path = require('path');
const cors = require('cors');
const request = require('request');

const app = express();
const port = 4000;
app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

const server = app.listen(port, function () {
  console.log(`listenting on port:${port}`);
});

module.exports = server;