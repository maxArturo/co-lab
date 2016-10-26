import React, { Component } from 'react';

const defaultState = { author: '', message: '' };

export default class MessageForm extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const message = this.state.message.trim();

    if (!author || !message) return;

    this.props.onMessageSubmit({ author, message });

    this.setState(defaultState);
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <div>
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
}
