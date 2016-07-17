const react = require('react');
const message = require('./Message.jsx');

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

const messageList = react.createClass({
    render: () => {
        const messages = simulatedData.map(m => {
            return (
                <message author={m.author} id={m.id}>
                    {m.text}
                </message>
            );
        });
        return (
            <div className = "messageList">
                {messages}
            </div>
        );
    }
});

module.exports = messageList;
