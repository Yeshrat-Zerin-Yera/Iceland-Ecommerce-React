import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <div className='nav'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : undefined}>Shop</NavLink>
                    <NavLink to="/orders">Orders</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
