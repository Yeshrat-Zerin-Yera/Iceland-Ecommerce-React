import React, { useState } from 'react';
import './Orders.css';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, savedCart } = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    return (
        <div className='orders-container'>
            <div className="reviewItems-container">
                {
                    cart.map(product => <ReviewItem key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className="orderCart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;