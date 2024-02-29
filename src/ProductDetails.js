// ProductDetails.js
import React from 'react';
import './ProductDetails.css';
 
const ProductDetails = ({ product, goBack, addToCart }) => {
  const { image, title, price, description, rating } = product;

  return (
    <div className="product-details">
      <button className="back" onClick={goBack}>Back to Products</button>
      <div style={{ display: 'flex' }}>
        <img src={image} alt={title} style={{ width: '50%', maxHeight: '65vh' }} />
        <div style={{ width: '50%', marginLeft: '20px' }}>
          <h1>{title}</h1>
          <h2>Price: ${price}</h2>
          <h3>Description</h3>
          <p>{description}</p>
          <h3>Rating</h3>
          <p>{rating.rate} ({rating.count} reviews)</p>
          <button className="back"onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
