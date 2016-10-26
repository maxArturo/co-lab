import React, { Component } from 'react';
import Chat from './chat/Chat';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>chat</h3>
        <Chat messages={this.props.messages}/>
      </div>
    );
  }
}

App.defaultProps = { messages: [] };
