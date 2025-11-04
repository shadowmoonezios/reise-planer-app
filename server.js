const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME || 'reiseplaner';

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Willkommen zur Reise Planer App API!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});