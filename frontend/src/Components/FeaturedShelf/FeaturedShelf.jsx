import React from 'react'
import './FeaturedShelf.css'

export default function FeaturedShelf() {
    return (
        <section class="tray-section">
            <div class="tray-grid">

                <div class="product-tray">
                    <h3 class="tray-title"><i class="fas fa-fire"></i> Trending Now</h3>
                    <div class="tray-content">
                        <div class="product-item">
                            <div class="product-img">
                                <img src="./assets/images/wireless_mouse.jpg" alt="Wireless Mouse"></img>
                            </div>
                            <div class="product-details">
                                <h4>Wireless Mouse</h4>
                                <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <span>(34)</span></div>
                                <p class="price">$25.99</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn" title="Add to Wishlist"><i class="far fa-heart"></i></button>
                                <button class="action-btn" title="Add to Cart"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="product-img">
                                <img src="./assets/images/bluetooth_headphones.jpg" alt="Bluetooth Headphones"></img>
                            </div>
                            <div class="product-details">
                                <h4>Bluetooth Headphones</h4>
                                <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> <span>(28)</span></div>
                                <p class="price">$59.99</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="product-img">
                                <img src="./assets/images/coffee_mug.jpg" alt="Coffee Mug"></img>
                            </div>
                            <div class="product-details">
                                <h4>Coffee Mug</h4>
                                <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> <span>(15)</span></div>
                                <p class="price">$9.99</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-tray">
                    <h3 class="tray-title"><i class="fas fa-award"></i> Best Sellers</h3>
                    <div class="tray-content">
                        <div class="product-item">
                            <div class="product-img"><img src="./assets/images/notebook.jpg" alt="Notebook"></img></div>
                            <div class="product-details">
                                <h4>Notebook</h4>
                                <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <span>(20)</span></div>
                                <p class="price">$4.99</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="product-img">
                                <img src="./assets/images/bluetooth_headphones.jpg" alt="Bluetooth Headphones"></img>
                            </div>
                            <div class="product-details">
                                <h4>Bluetooth Headphones</h4>
                                <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> <span>(28)</span></div>
                                <p class="price">$59.99</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="product-img">
                                <img src="./assets/images/water_bottle.jpg" alt="Water Bottle"></img>
                            </div>
                            <div class="product-details">
                                <h4>Water Bottle</h4>
                                <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> <span>(40)</span></div>
                                <p class="price">$14.99</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product-tray">
                    <h3 class="tray-title"><i class="fas fa-star"></i> Featured Items</h3>
                    <div class="tray-content">
                        <div class="product-item">
                            <div class="product-img"><img src="./assets/images/desk_lamp.jpg" alt="Desk Lamp"></img></div>
                            <div class="product-details">
                                <h4>Desk Lamp</h4>
                                <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <span>(12)</span></div>
                                <p class="price">$19.99</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="product-img">
                                <img src="./assets/images/full_sleeve_jersey.jpg" alt="Full Sleeve Jersey"></img>
                            </div>
                            <div class="product-details">
                                <h4>Full Sleeve Jersey</h4>
                                <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> <span>(25)</span></div>
                                <p class="price">$79.99</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div class="product-item">
                            <div class="product-img">
                                <img src="./assets/images/coffee_mug.jpg" alt="Coffee Mug"></img>
                            </div>
                            <div class="product-details">
                                <h4>Coffee Mug</h4>
                                <div class="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i> <span>(15)</span></div>
                                <p class="price">$9.99</p>
                            </div>
                            <div class="product-actions">
                                <button class="action-btn"><i class="far fa-heart"></i></button>
                                <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
