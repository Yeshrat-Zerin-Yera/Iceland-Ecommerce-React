import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Google from '../../images/google.svg';

const SignUp = () => {
    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        setError(null);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password.length < 6) {
            setError('Password must be at least 6 digit');
            return;
        }
        if (password !== confirm) {
            setError('Your passwords does not match');
            return;
        }
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <p className='error'>{error}</p>
                <button className="sign-up-btn">Sign Up</button>
                <p className='login-link'>Already have an account? <Link to='/login'>Login</Link></p>
                <div className='divider'>
                    <hr /> or <hr />
                </div>
                <button className='google-btn'><img src={Google} alt="" /> Continue with Google</button>
            </form>
        </div>
    );
};

export default SignUp;