// Product.js
import React from 'react';
import './Product.css';
const Product = ({ product, selectProduct }) => {
  const { image, title, price } = product;

  const handleDetailsClick = () => {
    selectProduct(product);
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>
      <button className='deets' onClick={handleDetailsClick}>Details</button>
    </div>
  );
};

export default Product; 
