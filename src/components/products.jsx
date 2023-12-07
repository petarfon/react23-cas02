import React from 'react'
import OneProduct from './oneProduct'

const Products = () => {
    const title = "New product";
    const text = "This is new product description";
    return (
        <div className='all-products'>
            <OneProduct name={title} text={text} />
            <OneProduct name={title} text={text} />
            <OneProduct name={title} text={text} />
        </div>
    )
}

export default Products