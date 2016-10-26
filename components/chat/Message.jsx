import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="messageBody">
        <td>
          <div className="messageAuthor">
            {this.props.author}
          </div>
          {this.props.timestamp}: {this.props.children}
        </td>
      </tr>
    );
  }
}
