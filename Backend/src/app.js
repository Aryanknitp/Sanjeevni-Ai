const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Healthcare Emergency App backend is running' });
});

app.use('/api/health', require('./routes/health')); 

module.exports = app;
