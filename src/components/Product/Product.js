import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <div>
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>Price: ${price}</p>
                </div>
                <div className='info-second'>
                    <p className='product-seller'>Manufacturer: {seller}</p>
                    <p className='product-rating'>Rating: {ratings} stars</p>
                </div>
            </div>
            <button onClick={ () => handleAddToCart(product)} className="cart-btn">Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;