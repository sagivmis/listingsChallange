const express = require('express');
const { port } = require('./config.json');

const app = express();

app.get('/example', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ message: 'Hi, from the server' })
});

app.listen(port, () => console.log(`server is listening on: ${port}`));