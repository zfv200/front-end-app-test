import React from 'react'

import './Box.css'

const Box = (props) => {

    const generateStyle = () => {
        let backgroundImage;
        let borderColor;
        if(props.selectedItem){
            backgroundImage = `url(${props.selectedItem.image})`
        } else {
            backgroundImage = null 
        }

        if(props.finalized){
            borderColor = 'lawngreen'
        } else {
            borderColor = 'black'
        }
        return {
            backgroundImage: backgroundImage,
            borderColor: borderColor
        }
    }

    return (
        <div 
            id='box' 
            data-test='component-box'
            style={generateStyle()}
        >
        </div>
    )
}

export default Box