const React = require('react');
const Message = require('./Message');

const MessageList = React.createClass({
  render: function render() {
    const messages = this.props.messages.map((m, i) => {
      return (
        <Message author={m.author} key={i} timestamp={(new Date()).toTimeString()}>
          {m.message}
        </Message>
      );
    });

    return (
      <div className="messageList">
        <table>
          <tbody>
          {messages}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = MessageList;
