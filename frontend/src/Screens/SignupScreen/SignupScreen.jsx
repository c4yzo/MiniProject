import React from 'react'
import './SignupScreen.css'
import { Link } from 'react-router-dom'

export default function SignupScreen() {
    return (
        <>
            <title>Signup | Nateurix</title>
            <div class="signup-screen">
                <div class="containerr">
                    <form class="signup-form">
                        <h2 class="form-title">Create Account</h2>

                        <div class="input-grid">
                            <div class="input-box">
                                <input type="text" required></input>
                                <label>First Name</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="text" required></input>
                                <label>Last Name</label>
                                <span></span>
                            </div>

                            <div class="input-box full-width">
                                <input type="email" required></input>
                                <label>Email Address</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="tel" required></input>
                                <label>Phone Number</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="date" class="date" required></input>
                                <label class="static-label">Date of Birth</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="password" required></input>
                                <label>Password</label>
                                <span></span>
                            </div>

                            <div class="input-box">
                                <input type="password" required></input>
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
