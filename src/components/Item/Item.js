import React from 'react'
import PropTypes from 'prop-types'
import './item.css'
// import { numberLiteralTypeAnnotation } from '@babel/types';

const Item = (props) => {

    const getImageSource = () => {
        let formattedName = props.product.toLowerCase()
        let image = require(`../../../public/${formattedName}.jpg`)
        return {backgroundImage: `url(${image})`}
    }

    return (
        <div style={getImageSource()} className='item' data-test='component-item'>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.number,
    Item: PropTypes.string,
    price: PropTypes.number 
}

export default Item