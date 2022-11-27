import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Model from '../../images/model.jpg';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-details'>
                <h1>New Collection For Winter</h1>
                <p>Find out about the latest additions to the ready-to-wear collection.</p>
                <Link to='/shop' className='shop-now'>Shop Now <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link>
            </div>
            <div className='home-img'>
                <img src={Model} alt="" />
            </div>
        </div>
    );
};

export default Home;