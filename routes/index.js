const router = require('express').Router();
const renderIndex = require('../controllers').renderIndex;
const apiRouter = require('./api');

router.get('/', renderIndex);

router.get('/about', (req, res) => {
  res.send('This project is about working on music together.');
});

router.use('/', apiRouter);

module.exports = router;

