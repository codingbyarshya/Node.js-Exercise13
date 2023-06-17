const express = require('express');
const app = express();
const db = require('./db');

app.get('/planets', async (req, res) => {
  try {
    const planets = await db.any('SELECT * FROM planets');
    res.json(planets);
  } catch (error) {
    console.error('Error retrieving planets:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
