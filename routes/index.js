/* eslint-disable new-cap */

const router   = require('express').Router();
const HomePage = require('../public/dist/components/App');
const React    = require('react');
const ReactDOM = require('react-dom/server');

router.get('/', (req, res) => {
  const reactFactory = React.createFactory(HomePage);
  const output = ReactDOM.renderToString(reactFactory());

  res.send(output);
});

router.get('/about', (req, res) => {
  res.send('This project is about working on music together.');
});

module.exports = router;

