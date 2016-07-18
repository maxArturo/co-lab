const React = require('react');
const Message = require('./Message');

const MessageList = React.createClass({
    getInitialState: () => {
       return { messages: [] };
    },

    getMessages: function getMessages() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function success(data) {
                this.setState({ messages: data.messages });
            }.bind(this),
            error: function error(xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    componentDidMount: function componentDidMount() {
        this.getMessages();
    },

    render: function render() {
        const messages = this.state.messages.map((m, i) => {
            return (
                <Message author={m.author} key={i} timestamp={(new Date()).toTimeString()}>
                    {m.text}
                </Message>
            );
        });

        return (
            <div className = "messageList">
                <table>
                    <tbody>
                    {messages}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = MessageList;
