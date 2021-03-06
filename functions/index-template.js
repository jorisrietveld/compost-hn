const functions = require('firebase-functions');
const fetch = require('node-fetch');

exports.preload = functions.https.onRequest((req, res) => {
  const url = 'https://api.hnpwa.com/v0/news/1.json';

  fetch(url)
    .then(response => response.json())
    .then((items) => {
      const time = Date.now() + (5 * 60 * 1000);
      res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
      res.status(200).send(`[[html]]`);
    });
});
