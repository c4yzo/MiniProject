import React from 'react'
import './Showcase.css'
import './Showcase.js'
import data from '../../data.js'
import { Link } from 'react-router-dom'

export default function Showcase() {
  return (
    <section className="best-sellers">
      <div className="section-header">
        <h2>Best Sellers</h2>
        <p>Explore our most popular products this week</p>
      </div>

      <div className="product-grid" id="product-grid">
        {data.products.map((product) => (
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
