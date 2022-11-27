import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, img, name, price, shipping, quantity } = product;

    return (
        <div className='review-item'>
            <div>
                <img src={img} alt=''></img>
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <h4>{name}</h4>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping: <span>${shipping}</span></p>
                    <p>Ouantity: <span>{quantity}</span></p>
                </div>
                <div className='review-delete'>
                    <button onClick={() => handleRemoveItem(id)}>
                        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;