const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const documents = require('./documents.json');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is a search engine');
});

app.get('/search', (req, res) => {
  const query = req.query.q;

  if (query) {
    const result = documents.filter((element) =>
      Object.values(element).some((item) => String(item).includes(query))
    );
    if (result.length === 0) {
      res.status(404).json({ error: 'Record not found' });
    }
    res.send(result);
  } else {
    res.send(documents);
  }
});

app.get('/documents/:id', (req, res) => {
  const param = parseInt(req.params.id);
  const isParam = documents.some(
    (document) => document.id === Number(req.params.id)
  );
  if (isParam) {
    const result = documents.filter((document) => document.id === param);
    res.send(result);
  } else {
    res.status(404).json({ error: 'Record not found' });
  }
});

app.post('/search', (req, res) => {});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
