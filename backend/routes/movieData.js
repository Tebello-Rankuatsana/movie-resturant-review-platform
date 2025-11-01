const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();



router.get('/popular', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/search', async (req, res) => {
    const query = req.query.q;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/search?api_key=${process.env.TMDB_API_KEY}&query=${query}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;