const React = require('react');

const MessageForm = React.createClass({

    render: () => {
        return (
            <div className = "messageForm">
                <form action="/api/v1/messages" method="post">
                    <input type="text" name="new_message"/>
                    <div className="button">
                        <button type="submit">send</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = MessageForm;
