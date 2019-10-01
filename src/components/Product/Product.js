import React from 'react'
import PropTypes from 'prop-types'
import { numberLiteralTypeAnnotation } from '@babel/types';

const Product = () => {

    return (
        <div data-test='component-product'>
            single product
        </div>
    )
}

Product.propTypes = {
    id: PropTypes.number,
    product: PropTypes.string,
    price: PropTypes.number 
}

export default Product