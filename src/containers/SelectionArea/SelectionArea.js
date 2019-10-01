import React from 'react'
import './SelectionArea.css'

// component imports:
import Box from '../../components/Box/Box'
import Message from '../../components/Message/Message'
import FinalizeButton from '../../components/FinalizeButton/FinalizeButton'

const SelectionArea = () => {

    return (
        <div id="selection-area" data-test='component-selection-area'>
            <div id='customer-tools'>
                <h1>My Box:</h1>
                <Box />
                <Message />
                <FinalizeButton />
            </div>
        </div>
    )
}

export default SelectionArea