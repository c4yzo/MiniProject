import React from 'react'
import './ShippingScreen.css'

export default function ShippingScreen() {
    return (
        <>
            <title>Cart | Nateurix</title>
            <div className="shipping-screen">
                <div className="container checkout-container">
                    <div className="stepper">
                        <div className="step completed">
                            <div className="step-num">
                                <svg className="icon icon-sm icon-success" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <span>Cart</span>
                        </div>
                        <div className="step-line"></div>
                        <div className="step active">
                            <div className="step-num">2</div>
                            <span>Shipping</span>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-num">3</div>
                            <span>Payment</span>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-7">
                            <div className="card p-4 p-md-5">
                                <h3 className="card-title">Shipping Address</h3>

                                <form id="shipping-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" placeholder="e.g. John" required></input>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" placeholder="e.g. Doe" required></input>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Street Address</label>
                                            <input type="text" className="form-control" placeholder="123 Modern Avenue, Suite 400" required></input>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" placeholder="New York" required></input>
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">State</label>
                                            <select className="form-select" required defaultValue="">
                                                <option value="" disabled>Select</option>
                                                <option>NY</option>
                                                <option>CA</option>
                                                <option>TX</option>
                                                <option>FL</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">ZIP Code</label>
                                            <input type="text" className="form-control" placeholder="10001" required></input>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Phone Number</label>
                                            <input type="tel" className="form-control" placeholder="+1 (555) 000-0000" required></input>
                                        </div>
                                    </div>

                                    <div className="mt-5 d-none d-lg-block">
                                        <button type="submit" className="btn btn-primary">
                                            Continue to Payment
                                            <svg className="icon icon-sm ms-2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                        </button>
                                        <div className="text-center mt-3">
                                            <a href="#" className="text-muted text-decoration-none small fw-medium">
                                                <svg className="icon icon-xs d-inline-block align-middle" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
                                                Return to cart
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="card p-4 p-md-5">
                                <h3 className="card-title">Shipping Method</h3>
                                <p className="text-muted small mb-4">Select how you'd like your order delivered.</p>

                                <div className="shipping-options-container">
                                    <div className="shipping-option selected">
                                        <input type="radio" name="shipping" id="standard" defaultChecked></input>
                                        <label htmlFor="standard" className="shipping-option-content">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <span className="fw-bold h6 mb-0">Standard Delivery</span>
                                                <span className="badge bg-success-subtle text-success px-2 py-1">Free</span>
                                            </div>
                                            <div className="small text-muted">Arrives in 3-5 business days</div>
                                        </label>
                                    </div>

                                    <div className="shipping-option">
                                        <input type="radio" name="shipping" id="express" disabled></input>
                                        <label htmlFor="express" className="shipping-option-content">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <span className="fw-bold h6 mb-0">Express Shipping</span>
                                                <span className="fw-bold text-dark">$15.00</span>
                                            </div>
                                            <div className="small text-muted">Arrives in 1-2 business days</div>
                                        </label>
                                    </div>

                                    <div className="shipping-option">
                                        <input type="radio" name="shipping" id="overnight" disabled></input>
                                        <label htmlFor="overnight" className="shipping-option-content">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <span className="fw-bold h6 mb-0">Overnight Delivery</span>
                                                <span className="fw-bold text-dark">$30.00</span>
                                            </div>
                                            <div className="small text-muted">Arrives by tomorrow morning</div>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-4 d-lg-none">
                                    <button type="button" className="btn btn-primary w-100">Continue to Payment</button>
                                </div>

                                <div className="mt-5 p-3 rounded-4 bg-light border border-dashed text-center">
                                    <p className="small text-muted mb-0">
                                        <svg className="icon icon-sm icon-primary me-1" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                        Secure 256-bit SSL Encrypted Checkout
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
