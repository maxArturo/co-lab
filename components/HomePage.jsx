const React = require('react');
const MessageList = require('./chat/MessageList');

const HomePage = React.createClass({
  render: () => {
    return (
      <div className = "homePage">
        <h3>This is Co-Lab, a collaboration site.</h3>
        <MessageList />
      </div>
    );
  }
});

module.exports = HomePage;
