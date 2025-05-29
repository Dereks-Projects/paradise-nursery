import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

const ProductPage = () => {
  // Get all unique categories for filter buttons
  const categories = [...new Set(products.map((product) => product.category))];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-page">
      <h1 className="product-title">Browse Our Plants</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setSelectedCategory(null)}>All</button>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Cart Button Below Grid */}
      <div className="cart-button-container">
        <Link to="/cart">
          <button className="cart-button">Go to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
