import React from 'react'

const Message = (props) => {

    return (
        <div data-test='component-message'>
            {props.message}
        </div>
    )
}

export default Message