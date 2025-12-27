import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CartScreen.css'
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
            <title>Cart | MiniProject</title>
            <div className="cart-screen">
                <div className="cart-container">
                    <h2>Your Cart</h2>

                    {cartItems.map((item) => (
                        <div className="cart-item" key={item._id}>
                            <img src={item.image} alt={item.name}></img>

                            <div className="item-details">
                                <div className="item-name">{item.name}</div>
                                <div className="item-price">${item.price}</div>
                            </div>

                            <div className="quantity-control">
                                <button onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateCartHandler(item, item.quantity + 1)}>+</button>
                            </div>

                            <button className="delete-btn" onClick={() => removeItemHandler(item)}>✖</button>
                        </div>
                    ))}

                    <div className="cart-summary">
                        <div className="total">Total: ${cartItems.reduce((sum, item) => (sum + item.price * item.quantity), 0)}</div>
                        {cartItems.length > 0 &&
                            <button className="place-order" onClick={() => checkoutHandler()}>Place Order</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
