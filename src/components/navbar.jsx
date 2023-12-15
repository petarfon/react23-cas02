import React from 'react'

function Navbar({ cartNum }) {
    return (
        <div className='navBar'>
            <a href='/'>My Store</a>
            <a href="/cart">
                <div className="cart-num">Cart: {cartNum}</div>
            </a>
        </div>
    )
}

export default Navbar