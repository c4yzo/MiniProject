import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SigninScreen.css';
import axios from 'axios';
import { Store } from '../../Store';

export default function SigninScreen() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/signin', { email, password });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');
        } catch (err) {
            alert("Invalid email or password");
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [userInfo, navigate, redirect]);
    return (
        <>
            <title>Signin | Nateurix</title>
            <div className="signin-screen">
                <div className="containerr">
                    <div className="content">
                        <h1>Sample <span>Design</span></h1>
                        <p className="par">This is a virtual farm market done for a mini project . By the students of goverment college of engineering kannur computer science and engineering</p>
                    </div>
                    <form className="login-form" onSubmit={submitHandler}>
                        <div className="input-box">
                            <input className="inf" type="text" onChange={(e) => setEmail(e.target.value)} required></input>
                            <label>Email address or phone number</label>
                            <span className="line"></span>
                        </div>

                        <div className="input-box">
                            <input className="inf" type="password" onChange={(e) => setPassword(e.target.value)} required></input>
                            <label>Password</label>
                            <span className="line"></span>
                        </div>
                        <button type='submit' className="log_in">Log in</button>
                        <a href="fp.html" className="pass">Forgotten password?</a>
                        <hr className="line2"></hr>
                        <a href="register.html" className="butt">Create new account</a>
                    </form>
                </div>
            </div>
        </>
    )
}
