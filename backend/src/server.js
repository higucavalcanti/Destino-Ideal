// Exemplo usando Express
const express = require('express');
const maritacaController = require('./controllers/maritacaController');
const app = express();
const port = 3001;
const cors = require('cors');
require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use('/api/maritalk', maritacaController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
