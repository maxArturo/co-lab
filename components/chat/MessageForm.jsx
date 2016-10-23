const React = require('react');
const defaultState = { author: '', message: '' };

const MessageForm = React.createClass({
    getInitialState: function getMessageFormInitialState() {
      return defaultState;
    },

    submitMessage: function submitMessage(e) {
      e.preventDefault();
      const author = this.state.author.trim();
      const message = this.state.message.trim();

      if (!author || !message) return;

      this.props.onMessageSubmit({ author, message });

      this.setState(defaultState);
    },

    handleAuthorChange: function handleAuthorChange(e) {
      this.setState({ author: e.target.value });
    },

    handleMessageChange: function handleMessageChange(e) {
      this.setState({ message: e.target.value });
    },

    render: function renderMessageForm() {
      return (
        <div className="messageForm">
          <form onSubmit={this.submitMessage}>
            <input
              type="text"
              placeholder="Your name"
              value={this.state.author}
              onChange={this.handleAuthorChange}
            />
            <input
              type="text"
              placeholder="Your message"
              value={this.state.message}
              onChange={this.handleMessageChange}
            />
            <div className="button">
              <button type="submit">send</button>
            </div>
          </form>
        </div>
      );
    }
  });

module.exports = MessageForm;
