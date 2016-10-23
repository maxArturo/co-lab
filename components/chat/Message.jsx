const React = require('react');

const Message = React.createClass({
  render: function render() {
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
});

module.exports = Message;
