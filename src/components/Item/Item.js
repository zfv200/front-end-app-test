import React from 'react'
import PropTypes from 'prop-types'
// import { numberLiteralTypeAnnotation } from '@babel/types';

const Item = () => {

    return (
        <div data-test='component-item'>
            single Item
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.number,
    Item: PropTypes.string,
    price: PropTypes.number 
}

export default Item