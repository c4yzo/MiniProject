import React, { useContext } from 'react'
import './Header_old.css'
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
            <div className="container">
                <div className="logo">
                    <Link to="/">NATE<span>URIX</span></Link>
                </div>

                <div className="search-container">
                    <input type="text" placeholder="Search products..."></input>
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className="header-actions">
                    <a href="#" className="action-item sell-btn" title="Sell Product">
                        <i className="fa-solid fa-circle-plus"></i>
                        <span>Sell</span>
                    </a>

                    <a href="#" className="action-item" title="Wishlist">
                        <i className="fa-regular fa-heart"></i>
                        <span className="badge">0</span>
                    </a>

                    <Link to="/cart" className="action-item" title="Cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        {cart.cartItems.length > 0 &&
                            <span className="badge">{cart.cartItems.length}</span>
                        }
                    </Link>

                    {userInfo ? (
                        <div className="user-account">
                            <i className="fa-regular fa-user"></i>
                            <div className="auth-links">
                                <span>{userInfo.firstName}</span>
                            </div>
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            <button type="button" onClick={signoutHandler}>Sigout</button>
                        </div>
                    ) : (
                        <div className="user-account">
                            <i className="fa-regular fa-user"></i>
                            <div className="auth-links">
                                <Link to="/signin">Login</Link>
                                <span>/</span>
                                <Link to="/signup">Register</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
