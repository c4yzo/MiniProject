import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Showcase.css'
import './Showcase.js'

export default function Showcase() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('api/products');
      setProducts(result.data);
    }
    fetchData();
  }, [])
  return (
    <section className="best-sellers">
      <div className="section-header">
        <h2>Best Sellers</h2>
        <p>Explore our most popular products this week</p>
      </div>

      <div className="product-grid" id="product-grid">
        {products.map((product) => (
          <div key={product.id}>
            <div className="product-card">
              <div className="badge-limited">Limited</div>
              <div className="product-img">
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image}
                    alt={product.name}></img>
                </Link>

                <div className="side-actions">
                  <button className="action-btn wishlist" title="Add to Wishlist">
                    <i className="far fa-heart"></i>
                  </button>
                  <button className="action-btn" title="Compare">
                    <i className="fas fa-arrows-rotate"></i>
                  </button>
                  <button className="action-btn" title="Quick View">
                    <i className="fas fa-magnifying-glass"></i>
                  </button>
                </div>

                <div className="overlay">
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
              <div className="product-info">
                <span className="category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="rating">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                    className="fas fa-star"></i><i className="fas fa-star"></i>
                  <span>({product.numReviews})</span>
                </div>
                <p className="price">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
