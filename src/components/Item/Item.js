import React from 'react'
import PropTypes from 'prop-types'
import './item.css'
// import { numberLiteralTypeAnnotation } from '@babel/types';

const Item = (props) => {
    
    const handleClick = () => {
        props.handleItemClick(props.id)
    }

    const generateOpacity = () => {
        return props.finalized ? 0.5 : 1
    }

    return (
        <div 
            style={{backgroundImage: `url(${props.image})`, opacity: generateOpacity()}} 
            onClick={handleClick}
            className='item' 
            data-test='component-item'>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.number,
    Item: PropTypes.string,
    price: PropTypes.number 
}

export default Item