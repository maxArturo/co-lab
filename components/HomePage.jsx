const react = require('react');
const messageList = require('./chat/MessageList.jsx');

const HomePage = react.createClass({
  render: () => {
    return (
      <div className = "homePage">
        <h3>This is Co-Lab, a collaboration site.</h3>
        <messageList />
      </div>
    );
  }
});

module.exports = HomePage;

