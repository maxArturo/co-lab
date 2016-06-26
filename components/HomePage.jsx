const React = require('react');

const HomePage = React.createClass({
  getDefaultProps: () => {
    return {
      size: 100
    }
  },

  render: () => {
    return (
      <div className = "homePage"> 
        <p>yo yo</p>
      </div>
    );
  }
});

module.exports = HomePage;

