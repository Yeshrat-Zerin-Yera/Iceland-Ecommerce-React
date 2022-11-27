import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleClearCart }) => {
    let productAmount = 0;
    let totalPrice = 0;
    let totalShippingCharge = 0;
    for (const product of cart) {
        productAmount = productAmount + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShippingCharge = totalShippingCharge + product.shipping;
    }
    const tax = totalShippingCharge * .1;
    const payingAmount = totalPrice + totalShippingCharge + tax;

    return (
        <div className='cart'>
            <h2>Shopping Cart</h2>
            <p>Product Amount: {productAmount}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${totalShippingCharge.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Paying Amount: ${payingAmount.toFixed(2)}</h3>
            <button onClick={handleClearCart} className='clear-cart-btn'>Clear Cart</button>
        </div>
    );
};

export default Cart;