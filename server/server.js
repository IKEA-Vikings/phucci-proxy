const express = require('express');
const path = require('path');
const cors = require('cors');
const request = require('request');


const app = express();
const port = process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());



// app.get('/images/org/:id', (req, res) => {
//   // res.render('http://localhost:3004/ap p.js')
//   res.redirect('http://localhost:3004/app.js');
// });


const server = app.listen(port, function () {
  console.log(`listenting on port:${port}`);
});

module.exports = server;