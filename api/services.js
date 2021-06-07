const fetch = require('node-fetch')

// handle news feed fetching
const fetchCovidArticles = async (req, res) => {
  console.log('fetching news...');
  const data = await fetch(`https://newsapi.org/v2/everything?q=covid&sortBy=publishedAt&language=en&apiKey=${process.env.NEWS_API_KEY}`);
  const news = await data.json();
  console.log(news);
  res.json(news);
}

const fetchTechArticles = async (req, res) => {
  console.log('fetching news...');
  const data = await fetch(`https://newsapi.org/v2/everything?q=tech&sortBy=publishedAt&language=en&apiKey=${process.env.NEWS_API_KEY}`);
  const news = await data.json();
  res.json(news);
}

const fetchSportsArticles = async (req, res) => {
  console.log('fetching news...');
  const data = await fetch(`https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&language=en&apiKey=${process.env.NEWS_API_KEY}`);
  const news = await data.json();
  res.json(news);
}

module.exports = {
  fetchCovidArticles,
  fetchTechArticles,
  fetchSportsArticles
}