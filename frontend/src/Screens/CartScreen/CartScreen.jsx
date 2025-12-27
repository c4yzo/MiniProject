import React, { useContext } from 'react'
import './CartScreen.css'
import { Store } from '../../Store';

export default function CartScreen() {
    const { state, dispatch } = useContext(Store);
    const { cart: { cartItems } } = state;
    return (
        <>
            <title>Cart | MiniProject</title>
            <div className="cart-screen">
                <div class="cart-container">
                    <h2>Your Cart</h2>

                    {cartItems.map((item) => (
                        <div class="cart-item" key={item._id}>
                            <img src={item.image} alt={item.name}></img>

                            <div class="item-details">
                                <div class="item-name">{item.name}</div>
                                <div class="item-price">${item.price}</div>
                            </div>

                            <div class="quantity-control">
                                <button>-</button>
                                <span>{item.quantity}</span>
                                <button>+</button>
                            </div>

                            <div class="delete-btn">✖</div>
                        </div>
                    ))}

                    <div class="cart-summary">
                        <div class="total">Total: ${cartItems.reduce((sum, item) => (sum + item.price * item.quantity), 0)}</div>
                        {cartItems.length > 0 &&
                            <button class="place-order">Place Order</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
