/* eslint-disable new-cap */

const App = require('../dist/components/App').default;
const React = require('react');
const ReactDOM = require('react-dom/server');
const messagesService = require('../services/messages');

function renderIndex(req, res) {
  const appElement = React.createElement(
      App, messagesService.queryMessages(), null
    );
  const output = ReactDOM.renderToString(appElement);

  res.render('index/home', {
    reactMarkup: output,
  });
}

module.exports = {
  renderIndex,
};

