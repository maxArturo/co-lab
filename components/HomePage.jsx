const React = require('react');
const Chat = require('./chat/Chat');

const HomePage = React.createClass({
  render: function render() {
    return (
      <div className = "homePage">
        <h3>chat</h3>
        <Chat />
      </div>
    );
  }
});

module.exports = HomePage;

