import React, { Component } from 'react';
import MessageForm from './MessageForm';

const defaultState = { author: '', message: '' };

export default class MessageFormContainer extends Component {
  constructor(props) {
    super(props);

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
      <MessageForm submitMessage={this.submitMessage}
                   handleAuthorChange={this.handleAuthorChange}
                   handleMessageChange={this.handleMessageChange}
                   author={this.state.author}
                   message={this.state.message}
      />
    );
  }
}
