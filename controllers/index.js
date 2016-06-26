/* eslint-disable new-cap */

const HomePage = require('../dist/components/HomePage');
const React = require('react');
const ReactDOM = require('react-dom/server');

function renderIndex(req, res) {
  const homeFactory = React.createFactory(HomePage);
  const output = ReactDOM.renderToString(homeFactory());

  res.render('index/home', {
    reactMarkup: output,
  });
}

module.exports = {
  renderIndex,
};

