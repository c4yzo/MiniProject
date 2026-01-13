import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SigninScreen.scss';
import axios from 'axios';
import { Store } from '../../Store';

export default function SigninScreen() {
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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                            <input type="text" onChange={(e) => setEmail(e.target.value)} required></input>
                            <label>Email address or phone number</label>
                            <span></span>
                        </div>

                        <div className="input-box">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} required></input>
                            <label>Password</label>
                            <span></span>
                        </div>
                        <button type='submit' className="log_in">Log in</button>
                        <a href="fp.html" className="pass">Forgotten password?</a>
                        <hr className="line"></hr>
                        <Link to={'/signup'} className="btn">Create new account</Link>
                    </form>
                </div>
            </div>
        </>
    )
}
