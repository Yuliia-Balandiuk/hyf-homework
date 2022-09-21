const express = require('express');
const app = express();
const port = 3000;
const document = require('./documents.json');

// Support parsing JSON requests
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is a search engine');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
