const React = require('react');

const Message = React.createClass({
    render: () => {
        return (
            <div className = "messageBody">
                {this.props.children}

                <div className = "messageAuthor">
                    {this.props.author}
                </div>
            </div>
        );
    }
});

module.exports = Message;
