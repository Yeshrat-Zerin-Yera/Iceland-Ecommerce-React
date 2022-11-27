import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Google from '../../images/google.svg';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit}>
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