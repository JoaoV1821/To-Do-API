const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/todo', (req, res) => {
  res.send('To Do collunm')
});

app.get('/doing', (req, res) => {
    res.send('Doing collunm');
});

app.get('/done', (req, res) => {
    res.send('Done collunm');
});

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});