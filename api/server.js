require('dotenv').config({ path: '.variables.env' });
    
const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// api services
const api = require('./services');

// routes for news feeds
app.get('/feed/covid', api.fetchCovidArticles);

app.get('/feed/tech', api.fetchTechArticles);

app.get('/feed/sports', api.fetchSportsArticles);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});