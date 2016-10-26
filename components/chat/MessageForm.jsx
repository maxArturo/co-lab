import React, { Component } from 'react';

export default class MessageForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.submitMessage}>
          <input
            type="text"
            placeholder="Your name"
            value={this.props.author}
            onChange={this.props.handleAuthorChange}
          />
          <input
            type="text"
            placeholder="Your message"
            value={this.props.message}
            onChange={this.props.handleMessageChange}
          />
          <div className="button">
            <button type="submit">send</button>
          </div>
        </form>
      </div>
    );
  }
}
