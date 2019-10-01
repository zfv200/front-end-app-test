import React from 'react'

import './Message.css'

const Message = (props) => {

    return (
        <div id='message' data-test='component-message'>
            {/* {props.message} */}
            <p id='message-content'>Sold out!</p>
        </div>
    )
}

export default Message