/* eslint-disable new-cap */

const router = require('express').Router();
const renderIndex = require('../controllers/index').renderIndex;

router.get('/', renderIndex);

router.get('/about', (req, res) => {
  res.send('This project is about working on music together.');
});

module.exports = router;

