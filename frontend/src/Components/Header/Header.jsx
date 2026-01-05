import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Store } from '../../Store'
export default function Header() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo, cart } = state;

    const signoutHandler = () => {
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
    };
    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        <img src="/logo.svg" alt="Natuarix" height="40"></img>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa-solid fa-bars text-white"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">

                        <form className="d-flex mx-auto my-3 my-lg-0 search-form" role="search">
                            <input type="search" placeholder="Search for products..." id="search-bar"></input>
                            <button id="search-button" type="button">Search</button>
                        </form>

                        <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center gap-3">

                            <li className="nav-item">
                                <a className="btn btn-sell" href="sell.html">
                                    <i className="fa-solid fa-tag"></i> Sell
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link position-relative" href="notification.html">
                                    <i className="fa-regular fa-bell"></i> Notification
                                    <span className="position-absolute translate-middle badge rounded-pill bg-danger notification-badge">2</span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" href="index.html">
                                    <i className="fa-solid fa-house"></i> Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="order.html">
                                    <i className="fa-solid fa-box-archive"></i> My Order
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="wishlist.html">
                                    <i className="fa-regular fa-heart"></i> Wishlist
                                </a>
                            </li>

                            <li className="nav-item">
                                <Link to="/cart" className="nav-link position-relative">
                                    <i className="fa-solid fa-cart-shopping"></i> Cart
                                    {cart.cartItems.length > 0 &&
                                        <span className="position-absolute translate-middle badge rounded-pill bg-danger cart-badge">{cart.cartItems.length}</span>
                                    }
                                </Link>
                            </li>

                            {userInfo ? (
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle d-flex align-items-center gap-1" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="/assets/images/IMG_20230510_221527.jpg" alt="User" className="rounded-circle profile-pic"></img>
                                        <span>{userInfo.firstName}</span>
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-end custom-dropdown-menu">
                                        <li><a className="dropdown-item" href="profile.html"><i className="fa-regular fa-user me-2"></i> My
                                            Profile</a></li>
                                        <li><a className="dropdown-item" href="settings.html"><i className="fa-solid fa-gear me-2"></i>
                                            Settings</a></li>
                                        <li>
                                            <hr className="dropdown-divider bg-light"></hr>
                                        </li>
                                        <li>
                                            <button className="dropdown-item text-danger" onClick={signoutHandler}>
                                                <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
                                            </button>
                                        </li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link to="/signin" className="nav-link">
                                        <i className="fa-regular fa-circle-user"></i> Sign In
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
