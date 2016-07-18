const React = require('react');
const MessageList = require('./MessageList');
const MessageForm = require('./MessageForm');

const Chat = React.createClass({
    render: () => {
        return (
            <div className = "chat">
                <MessageList url="/api/v1/messages"/>
                <MessageForm />
            </div>
        );
    }
});

module.exports = Chat;
