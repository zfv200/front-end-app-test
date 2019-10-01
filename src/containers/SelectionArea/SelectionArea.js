import React from 'react'

// component imports:
import Box from '../../components/Box/Box'
import Message from '../../components/Message/Message'
import FinalizeButton from '../../components/FinalizeButton/FinalizeButton'

const SelectionArea = () => {

    return (
        <div data-test='component-selection-area'>
            <Box />
            <Message />
            <FinalizeButton />
        </div>
    )
}

export default SelectionArea