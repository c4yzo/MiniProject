import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    cart: {
        cartItems: []
    }
}

function reducer(state, action) {
    switch (action.type) {
        case 'CART_ADD_ITEM':
            const newItem = action.payload;
            let cartItems = state.cart.cartItems;
            const index = cartItems.findIndex(item => item._id === newItem._id);
            if (index !== -1) {
                cartItems[index] = newItem;
            } else {
                cartItems.push(newItem);
            }
            return { ...state, cart: { ...state.cart, cartItems: cartItems } };
        default:
            return state;
    }
}

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}