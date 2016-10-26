import React, { Component } from 'react';
import Chat from './chat';
const apiUrl = '/api/v1/messages';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props);
    this.getMessages = this.getMessages.bind(this);
    this.handleMessageSubmitted = this.handleMessageSubmitted.bind(this);
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages() {
    $.ajax({
      url: apiUrl,
      dataType: 'json',
      cache: false,
      success: data => {
        console.log('got messages: ', data);
        this.setState({ messages: data.messages });
      },
      error: (xhr, status, err) => {
        console.log(this.props.url, status, err.toString());
      }
    });
  }

  handleMessageSubmitted(msg) {
    const { author, message } = msg;
    $.ajax({
      url: apiUrl,
      method: 'POST',
      dataType: 'json',
      data: { author, message },
      success: data => {
        this.setState({ messages: data.messages });
      },
      error: (xhr, status, err) => {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <Chat messages={this.state.messages} onMessageSubmit={this.handleMessageSubmitted} />
    );
  }
}

ChatContainer.defaultProps = { messages: [] };
