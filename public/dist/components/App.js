const React = require('react');

const HomePage = React.createClass({
  displayName: 'HomePage',

  getDefaultProps: () => {
    return {
      size: 100
    };
  },

  render: () => {
    return React.createElement(
      'p',
      null,
      ' Hello world from a component!'
    );
  }
});

module.exports = HomePage;