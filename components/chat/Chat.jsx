import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageFormContainer from './MessageFormContainer';

export default class Chat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MessageList messages={this.props.messages}/>
        <MessageFormContainer onMessageSubmit={this.props.onMessageSubmit}/>
      </div>
    );
  }
}
