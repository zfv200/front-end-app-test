import React from 'react'

import './Message.css'

const Message = (props) => {

    const renderMessage = () => {
        return props.error ? "Something seems to be wrong, please try again later!" : props.message
    }

    return (
        <div id='message' data-test='component-message'>
            <p id='message-content'>{renderMessage()}</p>
        </div>
    )
}

export default Message