const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const movieRoutes = require('./routes/movieData');


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('movie review app running');
});



const PORT = process.env.PORT || 4999;
app.listen(PORT, () => console.log(`started`));