const React = require('react');

const HomePage = React.createClass({
  getDefaultProps: () => {
    return {
      size: 100
    }
  },

  render: () => {
    return (
      <p> Hello world from a component!</p>
    );
  }
});

module.exports = HomePage;

