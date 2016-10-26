import React, { Component } from 'react';
import Message from './Message';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const messages = this.props.messages.map((m, i) => {
      return (
        <Message author={m.author} key={i} timestamp={(new Date()).toTimeString()}>
          {m.message}
        </Message>
      );
    });

    return (
      <div>
        <table>
          <tbody>
          {messages}
          </tbody>
        </table>
      </div>
    );
  }
}
