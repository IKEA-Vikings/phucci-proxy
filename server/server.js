const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');


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

app.get(`/api/product/:id`, (req, res) => {
  axios.get(`http://ec2-3-86-58-21.compute-1.amazonaws.com:3003/api/product/${req.params.id}`)
      .then((result) => res.send(result.data))
      .catch((err) => console.error('GET PRODUCT SIZES FAILED: ', err));
});

app.get(`/images/org/:id`, (req, res) => {
  axios.get(`http://ec2-54-67-28-46.us-west-1.compute.amazonaws.com:4004/images/org/${req.params.id}`)
      .then((result) => res.send(result.data))
      .catch((err) => console.error('GETTING PRODUCT IMAGES ERROR: ', err));
});

app.get(`/api/sizes/:id`, (req, res) => {
  axios.get(`http://ec2-18-221-34-3.us-east-2.compute.amazonaws.com:3002/api/sizes/${req.params.id}`)
      .then((result) => res.send(result.data))
      .catch((err) => console.error('GET PRODUCT SIZES FAILED: ', err));
});

app.get(`/api/reviews/:id/details`, (req, res) => {
  axios.get(`http://ec2-100-25-191-161.compute-1.amazonaws.com/api/reviews/${req.params.id}/details`)
      .then((result) => res.send(result.data))
      .catch((err) => console.error('GET REVIEWS FAILED: ', err));
});

const server = app.listen(port, function () {
  console.log(`listenting on port:${port}`);
});

module.exports = server;