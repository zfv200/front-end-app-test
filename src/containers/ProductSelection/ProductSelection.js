import React from 'react'
import './ProductSelection.css'

// component imports:
import Item from '../../components/Item/Item'

const ProductSelection = (props) => {

    const renderItems = () => {
        return props.items ? props.items.map(item=><Item key={item.id} {...item}/>) : null
    }
    return (
        <div id='product-selection' data-test='component-product-selection'>
            <div id='products'>
             {renderItems()}
            </div>
        </div>
    )
}

export default ProductSelection