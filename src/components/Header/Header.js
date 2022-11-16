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
                    <NavLink to="/orders" className={({ isActive }) => isActive ? 'active' : undefined}>Orders</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
