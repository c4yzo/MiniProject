import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ProductScreen.css'
import axios from 'axios';
import { Store } from '../../Store';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, product: action.payload };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default function ProductScreen() {
    const navigate = useNavigate();
    const params = useParams();
    const { slug } = params;
    const [{ loading, product, error }, dispatch] = useReducer(reducer, {
        loading: true,
        product: [],
        error: ""
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, [slug]);

    const { state: contextState, dispatch: contextDispatch } = useContext(Store);
    const { cart } = contextState;
    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find(x => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            window.alert("Sorry, the product is out of stock");
            return;
        }
        contextDispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: quantity } });
        navigate('/cart');
    };

    return (
        <>
            <title>
                {loading
                    ? 'Loading Product...'
                    : error
                        ? 'Error'
                        : `${product.name} | MiniProject`}
            </title>
            {loading
                ? <div>Loading...</div>
                : error
                    ? <div>{error}</div>
                    :
                    <div className="product-screen">
                        <div className="product-card">
                            <img src={product.image} alt={product.name}></img>

                            <div className="product-name">{product.name}</div>

                            <div className="price">${product.price}</div>

                            <div className="rating">{product.rating} ★★★★☆</div>
                            <div className="reviews">{product.numReviews} reviews</div>

                            {product.countInStock > 0 ?
                                <div className="status">In Stock</div> :
                                <div className="status">Unavailable</div>
                            }

                            <div className="description">{product.description}</div>

                            {product.countInStock > 0 &&
                                <div className="buttons">
                                    <button className="cart-btn" onClick={addToCartHandler}>Add to Cart</button>
                                    <button className="buy-btn">Buy Now</button>
                                </div>
                            }
                        </div>
                    </div>
            }
        </>
    )
}
