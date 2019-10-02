import React from 'react'
import './SelectionArea.css'

// component imports:
import Box from '../../components/Box/Box'
import Message from '../../components/Message/Message'
import FinalizeButton from '../../components/FinalizeButton/FinalizeButton'

const SelectionArea = (props) => {

    return (
        <div id="selection-area" data-test='component-selection-area'>
            <div id='customer-tools'>
                <h1>My Box:</h1>
                {/* render child components here */}
                <Box finalized={props.finalized} selectedItem={props.selectedItem}/>
                <Message error={props.error} message={props.message} />
                <FinalizeButton finalized={props.finalized} handleFinalizeClick={props.handleFinalizeClick} />
            </div>
        </div>
    )
}

export default SelectionArea