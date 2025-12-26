import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import './ProductScreen.css'
import axios from 'axios';

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
                                    <button className="cart-btn">Add to Cart</button>
                                    <button className="buy-btn">Buy Now</button>
                                </div>
                            }
                        </div>
                    </div>
            }
        </>
    )
}
