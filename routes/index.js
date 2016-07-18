const router = require('express').Router();
const renderIndex = require('../controllers/index').renderIndex;
const apiRouter = require('./api/index');

router.get('/', renderIndex);

router.get('/about', (req, res) => {
  res.send('This project is about working on music together.');
});

router.use('/', apiRouter);

module.exports = router;
