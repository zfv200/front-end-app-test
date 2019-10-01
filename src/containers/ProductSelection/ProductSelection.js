import React from 'react'

// component imports:
import Item from '../../components/Item/Item'

const ProductSelection = (props) => {

    const renderItems = () => {
        return props.items ? props.items.map(item=><Item key={item.id} {...item}/>) : null
    }
    return (
        <div data-test='component-product-selection'>
            {renderItems()}
        </div>
    )
}

export default ProductSelection