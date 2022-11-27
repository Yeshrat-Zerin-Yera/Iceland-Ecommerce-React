import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='header'>
            <div className='nav'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div onClick={() => setOpen(!open)} className='x-mark-bar'>
                    {
                        open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    }
                </div>
                <div className={`${open ? 'nav-links' : 'close'}`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/orders">Orders</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='signup'>Sign Up</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
