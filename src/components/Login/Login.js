import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Google from '../../images/google.svg';

const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <button className="login-btn">Login</button>
                <p className='signup-link'>New to Iceland? <Link to='/signup'>Create New Account</Link></p>
                <div className='divider'>
                    <hr /> or <hr />
                </div>
                <button className='google-btn'><img src={Google} alt="" /> Continue with Google</button>
            </form>
        </div>
    );
};

export default Login;