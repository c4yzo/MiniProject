import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './SignupScreen.scss';
import axios from 'axios';
import { Store } from '../../Store';

export default function SignupScreen() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, navigate, redirect]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords does not match");
            return;
        }
        try {
            const { data } = await axios.post('/api/users/signup', { firstName, lastName, email, phoneNo, dob, password });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');
        } catch (err) {
            alert("Invalid email or password");
        }
    };
    return (
        <>
            <title>Signup | Nateurix</title>
            <div class="signup-screen">
                <div class="containerr">
                    <form class="signup-form" onSubmit={submitHandler}>
                        <h2 class="form-title">Create Account</h2>

                        <div class="input-grid">
                            <div class="input-box">
                                <input type="text" onChange={(e) => setFirstName(e.target.value)} required></input>
                                <label>First Name</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="text" onChange={(e) => setLastName(e.target.value)} required></input>
                                <label>Last Name</label>
                                <span></span>
                            </div>

                            <div class="input-box full-width">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                                <label>Email Address</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="tel" onChange={(e) => setPhoneNo(e.target.value)} required></input>
                                <label>Phone Number</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="date" class="date" onChange={(e) => setDob(e.target.value)} required></input>
                                <label class="static-label">Date of Birth</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="password" onChange={(e) => setPassword(e.target.value)} required></input>
                                <label>Password</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                                <label>Confirm Password</label>
                                <span></span>
                            </div>
                        </div>
                        <button type='submit' class="sign_up_btn">Register</button>
                        <p class="login-link">Already have an account? <Link to={'/signin'}>Log in here</Link></p>
                    </form>
                    <div class="content">
                        <h1>Join our <span>Community</span></h1>
                        <p class="par">Experience the best virtual farm market created by the students of Government College of Engineering Kannur. Sign up today to access fresh produce directly from farmers.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
