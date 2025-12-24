import React from 'react'
import './FeaturedShelf.css'

export default function FeaturedShelf() {
    return (
        <section className="tray-section">
            <div className="tray-grid">

                <div className="product-tray">
                    <h3 className="tray-title"><i className="fas fa-fire"></i> Trending Now</h3>
                    <div className="tray-content">
                        <div className="product-item">
                            <div className="product-img">
                                <img src="./assets/images/wireless_mouse.jpg" alt="Wireless Mouse"></img>
                            </div>
                            <div className="product-details">
                                <h4>Wireless Mouse</h4>
                                <div className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i> <span>(34)</span></div>
                                <p className="price">$25.99</p>
                            </div>
                            <div className="product-actions">
                                <button className="action-btn" title="Add to Wishlist"><i className="far fa-heart"></i></button>
                                <button className="action-btn" title="Add to Cart"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-img">
                                <img src="./assets/images/bluetooth_headphones.jpg" alt="Bluetooth Headphones"></img>
                            </div>
                            <div className="product-details">
                                <h4>Bluetooth Headphones</h4>
                                <div className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> <span>(28)</span></div>
                                <p className="price">$59.99</p>
                            </div>
                            <div className="product-actions">
                                <button className="action-btn"><i className="far fa-heart"></i></button>
                                <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-img">
                                <img src="./assets/images/coffee_mug.jpg" alt="Coffee Mug"></img>
                            </div>
                            <div className="product-details">
                                <h4>Coffee Mug</h4>
                                <div className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(15)</span></div>
                                <p className="price">$9.99</p>
                            </div>
                            <div className="product-actions">
                                <button className="action-btn"><i className="far fa-heart"></i></button>
                                <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-tray">
                    <h3 className="tray-title"><i className="fas fa-award"></i> Best Sellers</h3>
                    <div className="tray-content">
                        <div className="product-item">
                            <div className="product-img"><img src="./assets/images/notebook.jpg" alt="Notebook"></img></div>
                            <div className="product-details">
                                <h4>Notebook</h4>
                                <div className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i> <span>(20)</span></div>
                                <p className="price">$4.99</p>
                            </div>
                            <div className="product-actions">
                                <button className="action-btn"><i className="far fa-heart"></i></button>
                                <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-img">
                                <img src="./assets/images/bluetooth_headphones.jpg" alt="Bluetooth Headphones"></img>
                            </div>
                            <div className="product-details">
                                <h4>Bluetooth Headphones</h4>
                                <div className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> <span>(28)</span></div>
                                <p className="price">$59.99</p>
                            </div>
                            <div className="product-actions">
                                <button className="action-btn"><i className="far fa-heart"></i></button>
                                <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-img">
                                <img src="./assets/images/water_bottle.jpg" alt="Water Bottle"></img>
                            </div>
                            <div className="product-details">
                                <h4>Water Bottle</h4>
                                <div className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(40)</span></div>
                                <p className="price">$14.99</p>
                            </div>
                            <div className="product-actions">
                                <button className="action-btn"><i className="far fa-heart"></i></button>
                                <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-tray">
                    <h3 className="tray-title"><i className="fas fa-star"></i> Featured Items</h3>
                    <div className="tray-content">
                        <div className="product-item">
                            <div className="product-img"><img src="./assets/images/desk_lamp.jpg" alt="Desk Lamp"></img></div>
                            <div className="product-details">
                                <h4>Desk Lamp</h4>
                                <div className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i> <span>(12)</span></div>
                                <p className="price">$19.99</p>
                            </div>
                            <div className="product-actions">
                                <button className="action-btn"><i className="far fa-heart"></i></button>
                                <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-img">
                                <img src="./assets/images/full_sleeve_jersey.jpg" alt="Full Sleeve Jersey"></img>
                            </div>
                            <div className="product-details">
                                <h4>Full Sleeve Jersey</h4>
                                <div className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> <span>(25)</span></div>
                                <p className="price">$79.99</p>
                            </div>
                            <div className="product-actions">
                                <button className="action-btn"><i className="far fa-heart"></i></button>
                                <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-img">
                                <img src="./assets/images/coffee_mug.jpg" alt="Coffee Mug"></img>
                            </div>
                            <div className="product-details">
                                <h4>Coffee Mug</h4>
                                <div className="rating"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i> <span>(15)</span></div>
                                <p className="price">$9.99</p>
                            </div>
                            <div className="product-actions">
                                <button className="action-btn"><i className="far fa-heart"></i></button>
                                <button className="action-btn"><i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
