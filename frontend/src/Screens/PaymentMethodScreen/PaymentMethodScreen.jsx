import React from 'react'
import { Link } from 'react-router-dom';
import './PaymentMethodScreen.css';

export default function PaymentMethodScreen() {
    return (
        <>
            <title>Payment Method | Nateurix</title>
            <div className="payment-method-screen">
                <div class="container">
                    <div className="stepper">
                        <div className="step completed">
                            <div className="step-num">
                                <svg className="icon icon-sm icon-success" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <span>Cart</span>
                        </div>
                        <div className="step-line"></div>
                        <div className="step completed">
                            <div className="step-num">
                                <svg className="icon icon-sm icon-success" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                            </div>
                            <span>Shipping</span>
                        </div>
                        <div className="step-line"></div>
                        <div className="step active">
                            <div className="step-num">3</div>
                            <span>Payment</span>
                        </div>
                    </div>

                    <div class="payment-card">
                        <div class="card-header-custom">
                            <span class="total-badge">Total: $249.00</span>
                            <h2 class="h4 fw-bold mb-1">Payment Method</h2>
                            <p class="text-muted small m-0">Choose how you'd like to pay.</p>
                        </div>

                        <form class="payment-options" onsubmit="return false;">

                            <label class="option-label">
                                <input type="radio" name="payment_method" value="paypal" checked></input>
                                <div class="option-card">
                                    <div class="option-icon-wrapper">
                                        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.05078 20.2031L7.54162 17.0911H10.605C13.6266 17.0911 16.035 15.8645 16.735 12.3162C16.9036 11.4593 16.8203 10.5752 16.4952 9.77123C16.1701 8.96727 15.6174 8.27786 14.9042 7.78625C13.8834 7.08292 12.5516 6.91458 11.0066 6.91458H5.66663L3.33329 21.6667H6.81829L7.05078 20.2031Z" fill="#003087" />
                                            <path d="M14.9041 7.78621C13.8833 7.08287 12.5516 6.91454 11.0066 6.91454H5.66663L3.33329 21.6666H6.81829L7.33912 18.375H10.605C13.1558 18.375 15.19 17.3395 15.7808 14.3466C15.8716 13.8866 15.918 13.4191 15.9183 12.95C15.9183 12.95 16.89 8.02621 14.9041 7.78621Z" fill="#009CDE" />
                                            <path d="M10.605 17.0911H7.54163L7.33913 18.375H6.8183L5.3533 27.6454H9.41246L10.0383 23.6845H10.605C13.1558 23.6845 15.19 22.6491 15.7808 19.6562C15.8713 19.1963 15.9177 18.7291 15.9183 18.26C15.8593 17.8485 15.7279 17.4526 15.5318 17.0956C14.7711 17.3486 13.9749 17.4777 13.1733 17.4779H10.665H10.605V17.0911Z" fill="#003087" />
                                        </svg>
                                    </div>
                                    <div class="option-details">
                                        <span class="option-title">PayPal</span>
                                        <span class="option-desc">Fast, secure checkout with your account.</span>
                                    </div>
                                    <div class="radio-circle"></div>
                                </div>
                            </label>

                            <label class="option-label disabled">
                                <input type="radio" name="payment_method" value="card"></input>
                                <div class="option-card">
                                    <div class="option-icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                    </div>
                                    <div class="option-details">
                                        <span class="option-title">Credit or Debit Card</span>
                                        <span class="option-desc">Visa, Mastercard, Amex supported.</span>
                                    </div>
                                    {/*<div class="radio-circle"></div>*/}
                                    <div class="badge-disabled">Disabled</div>
                                </div>
                            </label>

                            <label class="option-label disabled">
                                <input type="radio" name="payment_method" value="apple" disabled></input>
                                <div class="option-card">
                                    <div class="option-icon-wrapper">
                                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="text-secondary">
                                            <path d="M16.9205 13.5512C16.9363 11.5369 18.5992 10.4682 18.6811 10.4208C17.5878 8.84759 15.8893 8.79093 15.2285 8.76188C13.7995 8.61864 12.4411 9.60501 11.7147 9.60501C10.9837 9.60501 9.87352 8.78486 8.70776 8.80407C7.17835 8.82329 5.76517 9.69188 4.98177 11.0494C3.37648 13.8344 4.57793 17.9702 6.13845 20.231C6.90382 21.3364 7.80802 22.5847 9.02987 22.5401C10.2039 22.4939 10.6558 21.8021 12.0838 21.8021C13.5117 21.8021 13.9238 22.5401 15.1457 22.5185C16.4217 22.4939 17.2246 21.3663 17.9811 20.2527C18.8496 18.9818 19.2152 17.7511 19.231 17.6749C19.2081 17.6627 16.8929 16.7725 16.9205 13.5512ZM14.3976 6.84074C15.0336 6.07049 15.4608 5.00067 15.3424 3.9375C14.4347 3.97401 13.3371 4.54279 12.6931 5.30906C12.1158 5.98687 11.6055 7.07824 11.7451 8.12596C12.7547 8.20455 13.7629 7.61099 14.3976 6.84074Z" />
                                        </svg>
                                    </div>
                                    <div class="option-details">
                                        <span class="option-title text-muted">Apple Pay</span>
                                        <span class="option-desc text-muted">Temporarily unavailable</span>
                                    </div>
                                    <div class="badge-disabled">Disabled</div>
                                </div>
                            </label>

                            {/*
                            <label class="option-label disabled">
                                <input type="radio" name="payment_method" value="crypto" disabled></input>
                                <div class="option-card">
                                    <div class="option-icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </div>
                                    <div class="option-details">
                                        <span class="option-title text-muted">Cryptocurrency</span>
                                        <span class="option-desc text-muted">Coming soon</span>
                                    </div>
                                    <div class="badge-disabled">Disabled</div>
                                </div>
                            </label>
*/}

                            <div class="mt-4 pt-2">
                                <button type="button" class="btn-pay">
                                    <span>Pay Securely</span>
                                    <span>$249.00</span>
                                </button>

                                <div class="secure-note">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    All transactions are 256-bit SSL encrypted.
                                </div>
                            </div>

                            <div class="text-center mt-3">
                                <Link to={'/cart'} class="text-decoration-none text-muted small fw-bold">Cancel and return to cart</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
