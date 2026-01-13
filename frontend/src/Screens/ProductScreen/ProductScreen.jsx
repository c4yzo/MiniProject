import React, { useContext, useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductScreen.scss';
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
    const { id } = params;
    const [{ loading, product, error }, dispatch] = useReducer(reducer, {
        loading: true,
        product: [],
        error: ""
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/products/${id}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, [id]);

    const { state: ctxState, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = ctxState;
    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find(x => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            window.alert("Sorry, the product is out of stock");
            return;
        }
        ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: quantity } });
        navigate('/cart');
    };

    return (
        <>
            <title>
                {loading
                    ? 'Loading Product...'
                    : error
                        ? 'Error'
                        : `${product.name} | Nateurix`}
            </title>
            {loading
                ? <div>Loading...</div>
                : error
                    ? <div>{error}</div>
                    :
                    <div className="product-screen">
                        <div className="container page-container">
                            <div className="row align-items-center gx-5">

                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <div className="product-image-card">
                                        <button className="wishlist-btn" title="Add to Wishlist">
                                            <i className="bi bi-heart"></i>
                                        </button>
                                        <img src={product.image} alt={product.name} className="product-img"></img>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="product-details">
                                        <div className="breadcrumb-custom">
                                            Home / {product.category} / {product.name}
                                        </div>

                                        <h1 className="product-title">{product.name}</h1>

                                        <div className="product-meta">
                                            <span className="rating-badge">
                                                <i className="bi bi-star-fill"></i> {product.rating}
                                            </span>
                                            <span className="review-count">{product.numReviews} Reviews</span>

                                            {product.countInStock > 0 ?
                                                <span className="stock-status status-in-stock">
                                                    <i className="bi bi-check-circle-fill me-1"></i> In Stock
                                                </span> :
                                                <span className="stock-status status-in-stock">
                                                    <i className="bi bi-check-circle-fill me-1"></i> Unavailable
                                                </span>
                                            }

                                        </div>

                                        <div className="product-price">
                                            ₹{product.price}
                                        </div>

                                        <p className="product-description">
                                            {product.description}
                                        </p>

                                        {product.countInStock > 0 &&
                                            <div className="action-buttons">
                                                <button className="btn btn-primary-custom btn-custom">
                                                    Buy Now
                                                </button>
                                                <button className="btn btn-outline-custom btn-custom" onClick={addToCartHandler}>
                                                    <i className="bi bi-cart-plus me-2"></i> Add to Cart
                                                </button>
                                            </div>
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
