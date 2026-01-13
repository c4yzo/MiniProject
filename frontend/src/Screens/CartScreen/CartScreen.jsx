import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CartScreen.scss'
import { Store } from '../../Store';

export default function CartScreen() {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Store);
    const { cart: { cartItems } } = state;

    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            window.alert("Sorry, the product is out of stock");
            return;
        }
        dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity: quantity } });
    }

    const removeItemHandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    }

    const checkoutHandler = () => {
        navigate('/signin?redirect=/shipping');
    }
    return (
        <>
            <title>Cart | Nateurix</title>
            <div className="cart-screen">
                <div className="container page-container">
                    <h1 className="page-title mb-4">Shopping Cart</h1>

                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="cart-items-container">

                                {cartItems.map((item) => (
                                    <div className="cart-item-card mb-3" key={item._id}>
                                        <div className="row align-items-center">
                                            <div className="col-3 col-md-2">
                                                <img src={item.image} alt={item.name}
                                                    className="img-fluid rounded-3 cart-item-img"></img>
                                            </div>
                                            <div className="col-9 col-md-10">
                                                <div className="row align-items-center">
                                                    <div className="col-md-5 mb-2 mb-md-0">
                                                        <h5 className="cart-item-title mb-1">{item.name}</h5>
                                                        <p className="text-muted small mb-0">{item.category}</p>
                                                    </div>
                                                    <div className="col-md-3 mb-2 mb-md-0">
                                                        <div className="quantity-control">
                                                            <button className="btn-qty" type="button" onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity <= 1}><i className="bi bi-dash"></i></button>
                                                            <input type="text" className="form-control qty-input" value={item.quantity} readOnly></input>
                                                            <button className="btn-qty" type="button" onClick={() => updateCartHandler(item, item.quantity + 1)}><i className="bi bi-plus"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 mb-2 mb-md-0 text-md-end">
                                                        <span className="cart-item-price">₹{item.price}</span>
                                                    </div>
                                                    <div className="col-md-1 text-end">
                                                        <button className="btn-delete" title="Remove Item" onClick={() => removeItemHandler(item)}>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="order-summary-card">
                                <h4 className="summary-title">Order Summary</h4>
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>₹{cartItems.reduce((sum, item) => (sum + item.price * item.quantity), 0)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="summary-row">
                                    <span>Tax</span>
                                    <span>₹0.00</span>
                                </div>
                                <hr className="my-3"></hr>
                                <div className="summary-total-row">
                                    <span>Total</span>
                                    <span>₹{cartItems.reduce((sum, item) => (sum + item.price * item.quantity), 0)}</span>
                                </div>

                                {cartItems.length > 0 &&
                                    <button className="btn btn-primary-custom w-100 mt-4" onClick={() => checkoutHandler()}>
                                        Place Order
                                    </button>
                                }

                                <div className="mt-3 text-center">
                                    <Link to="/" href="product-detail.html" className="continue-shopping">
                                        <i className="bi bi-arrow-left me-1"></i> Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
