import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementItem,
  decrementItem,
  removeItem,
} from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalCost } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your cart is empty.</h2>
        <Link to="/products" className="continue-btn">
          Browse Plants
        </Link>
      </div>
    );
  }

  const handleCheckout = () => {
    alert('Checkout is coming soon!');
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
              </div>
              <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${totalCost.toFixed(2)}</h2>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
        <Link to="/products" className="continue-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
