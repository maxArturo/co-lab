const React = require('react');
const MessageList = require('./MessageList');
const MessageForm = require('./MessageForm');
const apiUrl = '/api/v1/messages';

const Chat = React.createClass({
  getInitialState: () => {
    return { messages: [] };
  },

  componentDidMount: function componentDidMount() {
    this.getMessages();
  },

  getMessages: function getMessages() {
    $.ajax({
      url: apiUrl,
      dataType: 'json',
      cache: false,
      success: function success(data) {
        this.setState({ messages: data.messages });
      }.bind(this),
      error: function error(xhr, status, err) {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleMessageSubmitted: function handleMessageSubmitted(msg) {
    const { author, message } = msg;
    $.ajax({
      url: apiUrl,
      method: 'POST',
      dataType: 'json',
      data: { author, message },
      success: function success(data) {
        this.setState({ messages: data.messages });
      }.bind(this),
      error: function error(xhr, status, err) {
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div className="chat">
        <MessageList messages={this.state.messages}/>
        <MessageForm onMessageSubmit={this.handleMessageSubmitted}/>
      </div>
    );
  }
});

module.exports = Chat;
