const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const documents = require('./documents.json');

app.use(express.json());

app.get('/', (req, res) => {
  res.send(documents);
});

app.get('/search', (req, res) => {
  try {
    const query = req.query.q;

    if (query) {
      const result = documents.filter((element) =>
        Object.values(element).some((item) => String(item).includes(query))
      );
      if (result.length === 0) {
        res.status(200).json({ message: 'Record not found' });
      }
      res.send(result);
    } else {
      res.send(documents);
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/documents/:id', (req, res) => {
  try {
    const param = parseInt(req.params.id);
    const isParam = documents.some((document) => document.id === param);

    if (isParam) {
      const result = documents.filter((document) => document.id === param);
      res.send(result);
    } else {
      res.status(404).json({ error: 'Record not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/search', async (req, res) => {
  try {
    const body = req.body.fields;
    const query = req.query.q;

    if (body && query) {
      res.status(400).json({
        error: 'Bad Request. You can specify only Query or only Body',
      });
    } else if (query) {
      const result = documents.filter((element) =>
        Object.values(element).some((item) => String(item).includes(query))
      );
      if (result.length === 0) {
        res.status(404).json({ error: 'Record not found' });
      }
      res.send(result);
    } else if (body) {
      const result = documents.filter((element) =>
        Object.keys(body).some((key) => element[key] === body[key])
      );
      if (result.length === 0) {
        res.status(404).json({ error: 'Record not found' });
      }
      res.send(result);
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
