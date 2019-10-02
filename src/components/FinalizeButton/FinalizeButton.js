import React from 'react'
import './FinalizeButton.css'

const FinalizeButton = (props) => {

    const buttonText = () => {
        // toggle button text based on app state
        return props.finalized ? "Choose something else!" : "Finalize Selection!"
    }

    return (
        <button 
            id='finalize' 
            data-test='component-finalize-button'
            onClick={props.handleFinalizeClick}
        >
            {buttonText()}
        </button>
    )
}

export default FinalizeButton