/* eslint-disable new-cap */

const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Co-lab home page!');
});

router.get('/about', (req, res) => {
  res.send('This project is about working on music together.');
});

module.exports = router;

