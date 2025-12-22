import React from 'react'
import './Header.css'
export default function Header() {
    return (
        <header class="main-header">
            <div class="container">
                <div class="logo">
                    <a href="#">SHOP<span>UI</span></a>
                </div>

                <div class="search-container">
                    <input type="text" placeholder="Search products..."></input>
                        <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div class="header-actions">
                    <a href="#" class="action-item sell-btn" title="Sell Product">
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Sell</span>
                    </a>

                    <a href="#" class="action-item" title="Wishlist">
                        <i class="fa-regular fa-heart"></i>
                        <span class="badge">0</span>
                    </a>

                    <a href="#" class="action-item" title="Cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="badge">3</span>
                    </a>

                    <div class="user-account">
                        <i class="fa-regular fa-user"></i>
                        <div class="auth-links">
                            <a href="#">Login</a>
                            <span>/</span>
                            <a href="#">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
