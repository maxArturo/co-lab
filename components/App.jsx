import React, { Component } from 'react';
import ChatContainer from './chat/ChatContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>chat</h3>
        <ChatContainer messages={this.props.messages}/>
      </div>
    );
  }
}

App.defaultProps = { messages: [] };
