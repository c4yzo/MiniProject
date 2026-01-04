import React from 'react';
import './SigninScreen.css';

export default function SigninScreen() {
    return (
        <>
            <title>Signin | MiniProject</title>
            <div classNameName="signin-screen">
                <div className="containerr">
                    <div className="content">
                        <h1>Sample <span>Design</span></h1>
                        <p className="par">This is a virtual farm market done for a mini project . By the students of goverment college of engineering kannur computer science and engineering</p>
                    </div>
                    <form className="login-form">
                        <div className="input-box">
                            <input className="inf" type="text" required></input>
                            <label>Email address or phone number</label>
                            <span className="line"></span>
                        </div>

                        <div className="input-box">
                            <input className="inf" type="password" required></input>
                            <label>password</label>
                            <span className="line"></span>
                        </div>
                        <a href="#" className="log_in">Log in</a>
                        <a href="fp.html" className="pass">Forgotten password?</a>
                        <hr className="line2"></hr>
                        <a href="register.html" className="butt">Create new account</a>
                    </form>
                </div>
            </div>
        </>
    )
}
