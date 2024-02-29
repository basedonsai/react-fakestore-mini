import React from 'react';

const Product = ({ product, selectProduct }) => {
  const { image, title, id } = product;

  return (
    <div className="product">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>${product.price}</p>
      <a href="#" onClick={() => selectProduct(product)}>Details</a>
    </div>
  );
};

export default Product;
