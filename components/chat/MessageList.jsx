const React = require('react');
const Message = require('./Message');

const simulatedData = [{
    id: 1,
    author: 'Me',
    text: 'stuff'
}, {
    id: 2,
    author: 'You',
    text: 'Hello'
}, {

    id: 3,
    author: 'Someone',
    text: 'Sup!'
}];

const MessageList = React.createClass({
    render: () => {
        const messages = simulatedData.map(m => {
            return (
                <Message author={m.author} key={m.id}>
                    {m.text}
                </Message>
            );
        });
        return (
            <div className = "messageList">
                {messages}
            </div>
        );
    }
});

module.exports = MessageList;
